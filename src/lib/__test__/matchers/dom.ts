import prettier from "prettier";

const domParser = new DOMParser();

const parseString = (s: string): Node[] | undefined => {
  const childNodes = domParser.parseFromString(s, "text/html")?.body?.childNodes;
  if (childNodes) {
    return [...childNodes];
  }
};

const isTextNode = (node: Node): node is Text => node.nodeType === Node.TEXT_NODE;
const isElementNode = (node: Node): node is HTMLElement => node.nodeType === Node.ELEMENT_NODE;
const isDocumentNode = (node: Node): node is Document => node.nodeType == Node.DOCUMENT_NODE;

// Node.ATTRIBUTE_NODE not included here because attributes are handled specially to allow them to
// be in different order while still matching
const significantNodeTypes = [Node.DOCUMENT_NODE, Node.ELEMENT_NODE, Node.TEXT_NODE];

// This function isn't perfect because what we _actually_ want to do is ignore whitespace nodes
// when they are in a block formatting context and _not_ do so otherwise, but this is good enough
// for now
const isSignificantNode = (node: Node) =>
  significantNodeTypes.includes(node.nodeType) &&
  !(isTextNode(node) && /\s*/.test(node.textContent ?? ""));

// Svelte uses attributes starting with __ internally, so our tests will always fail unless we ignore them
const isHiddenAttribute = ({ name }: Attr) => name.startsWith("__");

const attributesMatch = (nodeA: HTMLElement, nodeB: HTMLElement): boolean => {
  const firstAttrsSet = new Set<string>();

  for (const attr of nodeA.attributes) {
    if (isHiddenAttribute(attr)) continue;
    firstAttrsSet.add(attr.name);
    if (nodeB.attributes.getNamedItem(attr.name)?.value !== attr.value) return false;
  }

  for (const attr of nodeB.attributes) {
    if (isHiddenAttribute(attr)) continue;
    if (!firstAttrsSet.has(attr.name)) return false;
  }

  return true;
};

function* getChildNodePairs(
  nodeA: HTMLElement | Document,
  nodeB: HTMLElement | Document
): Generator<[Node, Node]> {
  const nodeAChildrenIterator = nodeA.childNodes[Symbol.iterator]();
  const nodeBChildrenIterator = nodeB.childNodes[Symbol.iterator]();

  let done = false;
  let nodeAChildrenDone: boolean | undefined;
  let nodeBChildrenDone: boolean | undefined;
  while (!done) {
    let nextChildA: Node | undefined;
    while (!nodeAChildrenDone && !(nextChildA && isSignificantNode(nextChildA))) {
      ({ done: nodeAChildrenDone, value: nextChildA } = nodeAChildrenIterator.next());
    }
    if (nextChildA && !isSignificantNode(nextChildA)) {
      nextChildA = undefined;
    }

    let nextChildB: Node | undefined;
    while (!nodeBChildrenDone && !(nextChildB && isSignificantNode(nextChildB))) {
      ({ done: nodeBChildrenDone, value: nextChildB } = nodeBChildrenIterator.next());
    }
    if (nextChildB && !isSignificantNode(nextChildB)) {
      nextChildB = undefined;
    }

    if (!nextChildA || !nextChildB) {
      done = true;
    } else {
      yield [nextChildA, nextChildB];
    }
  }
}

const doctypesMatch = (doctypeA: DocumentType | null, doctypeB: DocumentType | null) =>
  (doctypeA === null && doctypeB === null) || doctypeA?.name === doctypeB?.name;

const nodesMatch = (rootNodeA: Node, rootNodeB: Node): boolean => {
  const stack: [Node, Node][] = [[rootNodeA, rootNodeB]];

  const addChildNodePairsToStack = (
    nodeA: HTMLElement | Document,
    nodeB: HTMLElement | Document
  ) => {
    for (const pair of getChildNodePairs(nodeA, nodeB)) {
      if (!pair.every(Boolean)) return false;
      stack.push(pair);
    }
  };

  while (stack.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [nodeA, nodeB] = stack.pop()!;

    if (nodeA.nodeType !== nodeB.nodeType) return false;

    if (isTextNode(nodeA) && isTextNode(nodeB)) {
      if (nodeA.textContent !== nodeB.textContent) return false;
      continue;
    }

    if (isElementNode(nodeA) && isElementNode(nodeB)) {
      if (!attributesMatch(nodeA, nodeB)) return false;
      addChildNodePairsToStack(nodeA, nodeB);
      continue;
    }

    if (isDocumentNode(nodeA) && isDocumentNode(nodeB)) {
      if (!doctypesMatch(nodeA.doctype, nodeB.doctype)) return false;
      addChildNodePairsToStack(nodeA, nodeB);
      continue;
    }
  }

  return true;
};

const isNode = (it: unknown): it is Node => it instanceof Node;

const isIterable = (it: unknown): it is Iterable<unknown> =>
  typeof it === "object" &&
  it !== null &&
  Symbol.iterator in it &&
  typeof it[Symbol.iterator] === "function";

const asNodeArray = (it: unknown): Node[] | undefined => {
  if (it instanceof Node) return [it];
  if (Array.isArray(it)) return it;
  // This must go above the `isIterable` check because strings are iterators
  if (typeof it === "string") return parseString(it);
  if (isIterable(it)) return [...it].filter(isNode);
};

const getAsSignificantNodeArray =
  (label: string) =>
  (it: unknown): Node[] => {
    const nodeArray = asNodeArray(it);
    if (!nodeArray) {
      throw new Error(
        `${label} was not a node, an array of nodes, an iterable of nodes, or a string that could be parsed into an array of nodes`
      );
    }
    return nodeArray.filter(isSignificantNode);
  };

const getReceivedAsSignificantNodeArray = getAsSignificantNodeArray("received");
const getExpectedAsSignificantNodeArray = getAsSignificantNodeArray("expected");

const nodeToString = (node: Node) => {
  if (!isSignificantNode(node)) {
    return "";
  }

  if (isTextNode(node)) {
    return node.textContent;
  }

  if (isElementNode(node)) {
    const newNode = node.cloneNode(true) as HTMLElement;
    const stack: Node[] = [...newNode.childNodes];
    let currentNode: Node | undefined;
    while ((currentNode = stack.pop())) {
      if (!isSignificantNode(currentNode)) {
        currentNode.parentNode?.removeChild(currentNode);
      }
      stack.push(...currentNode.childNodes);
    }
    return newNode.outerHTML;
  }

  throw new Error(`nodeToString: unsupported node type ${node.nodeType}`);
};

const nodeArrayToString = (nodeArray: Node[]) => nodeArray.map(nodeToString).join("\n\n");

// The exported matchers _must not_ be arrow functions, because they depend on `this` being bound
// dynamically

export function toMatchDOMNodes<R>(
  this: {
    isNot: boolean;
    utils: { diff: (a: string, b: string) => string };
  },
  received: R,
  expected: string | Node[] | HTMLElement | NodeList
) {
  const { isNot } = this;

  const receivedNodeArray = getReceivedAsSignificantNodeArray(received);
  const expectedNodeArray = getExpectedAsSignificantNodeArray(expected);

  const pass = receivedNodeArray.reduce(
    (p, node, i) => p && nodesMatch(node, expectedNodeArray[i]),
    true
  );

  const actualString = prettier.format(nodeArrayToString(receivedNodeArray), { parser: "html" });
  const expectedString = prettier.format(nodeArrayToString(expectedNodeArray), { parser: "html" });

  return {
    pass,
    message: () => `received DOM nodes ${isNot ? "match" : "do not match"} expected DOM nodes.`,
    actual: actualString,
    expected: expectedString,
  };
}
