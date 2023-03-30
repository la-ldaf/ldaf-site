import prettier from "prettier";

const domParser = new DOMParser();

const parseString = (s: string): Node[] | undefined => {
  const childNodes = domParser.parseFromString(s, "text/html")?.body?.childNodes;
  if (childNodes) {
    return [...childNodes];
  }
};

// Node.ATTRIBUTE_NODE not included here because attributes are handled specially (to allow them to be in different order while still matching)
const meaningfulNodeTypes = [Node.DOCUMENT_NODE, Node.ELEMENT_NODE, Node.TEXT_NODE];

const isMeaningfulNode = (node: Node) =>
  meaningfulNodeTypes.includes(node.nodeType) && !(isTextNode(node) && node.textContent === "");

const getAsHTMLElement =
  (label: string) =>
  (stringOrElement: unknown): HTMLElement => {
    if (stringOrElement instanceof HTMLElement) {
      return stringOrElement;
    }
    if (typeof stringOrElement === "string") {
      const parsedString = parseString(stringOrElement);
      if (!parsedString) {
        throw new Error("${label} HTML string was not parsed successfully!");
      }
      const meaningfulNodes = parsedString.filter(isMeaningfulNode);
      if (meaningfulNodes.length !== 1) {
        throw new Error("${label} HTML string was parsed into too few or too many nodes!");
      }

      const [node] = meaningfulNodes;
      if (!isElementNode(node)) {
        throw new Error("${label} HTML string was not parsed into an HTML element!");
      }

      return node;
    }
    throw new Error("${label} was not an HTML element or a parseable HTML string");
  };

const receivedAsHTMLElement = getAsHTMLElement("received");
const expectedAsHTMLElement = getAsHTMLElement("expected");

const attributesMatch = (nodeA: HTMLElement, nodeB: HTMLElement): boolean => {
  const firstAttrsSet = new Set<string>();

  for (const attr of nodeA.attributes) {
    if (attr.name.startsWith("__")) {
      continue;
    }
    firstAttrsSet.add(attr.name);
    if (nodeB.attributes.getNamedItem(attr.name)?.value !== attr.value) {
      return false;
    }
  }

  for (const attr of nodeB.attributes) {
    if (attr.name.startsWith("__")) {
      continue;
    }
    if (!firstAttrsSet.has(attr.name)) {
      return false;
    }
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
    while (!nodeAChildrenDone && !(nextChildA && isMeaningfulNode(nextChildA))) {
      ({ done: nodeAChildrenDone, value: nextChildA } = nodeAChildrenIterator.next());
    }
    if (nextChildA && !isMeaningfulNode(nextChildA)) {
      nextChildA = undefined;
    }

    let nextChildB: Node | undefined;
    while (!nodeBChildrenDone && !(nextChildB && isMeaningfulNode(nextChildB))) {
      ({ done: nodeBChildrenDone, value: nextChildB } = nodeBChildrenIterator.next());
    }
    if (nextChildB && !isMeaningfulNode(nextChildB)) {
      nextChildB = undefined;
    }

    if (!nextChildA || !nextChildB) {
      done = true;
    } else {
      yield [nextChildA, nextChildB];
    }
  }

  return true;
}

const isTextNode = (node: Node): node is Text => node.nodeType === Node.TEXT_NODE;
const isElementNode = (node: Node): node is HTMLElement => node.nodeType === Node.ELEMENT_NODE;
const isDocumentNode = (node: Node): node is Document => node.nodeType == Node.DOCUMENT_NODE;

const doctypesMatch = (doctypeA: DocumentType | null, doctypeB: DocumentType | null) =>
  (doctypeA === null && doctypeB === null) || doctypeA?.name === doctypeB?.name;

const nodesMatch = (rootNodeA: Node, rootNodeB: Node): boolean => {
  const stack: [Node, Node][] = [[rootNodeA, rootNodeB]];

  const addChildNodePairsToStack = (
    nodeA: HTMLElement | Document,
    nodeB: HTMLElement | Document
  ) => {
    for (const pair of getChildNodePairs(nodeA, nodeB)) {
      if (!pair.every(Boolean)) {
        return false;
      }
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

// Warning - this function _mutates_ stack
const addChildNodePairsToStack = (
  nodeA: HTMLElement | Document,
  nodeB: HTMLElement | Document,
  stack: [Node, Node][]
): boolean => {};

// This _cannot_ be an arrow function
export default function <R>(
  this: {
    isNot: boolean;
  },
  received: R,
  expected: string | HTMLElement
) {
  const { isNot } = this;
  const receivedElement = receivedAsHTMLElement(received);
  const expectedElement = expectedAsHTMLElement(expected);
  return {
    pass: nodesMatch(receivedElement, expectedElement),
    message: () => `received DOM ${isNot ? "does not match" : "matches"} expected DOM.`,
    actual: prettier.format(receivedElement.outerHTML, { parser: "html" }),
    expected: prettier.format(expectedElement.outerHTML, { parser: "html" }),
  };
}
