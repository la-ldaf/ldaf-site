import { print as printQuery, type DocumentNode } from "graphql";

export class GraphQLFetchError extends Error {
  constructor(public readonly message: string, public readonly query: DocumentNode) {
    super(message);
  }

  get queryString() {
    return printQuery(this.query);
  }
}

export class FailedResponseError extends GraphQLFetchError {
  constructor(
    public readonly query: DocumentNode,
    public readonly url: string | URL,
    public readonly requestInit: RequestInit,
    public readonly response: Response
  ) {
    const message = `Got failed response for request of ${url} with status ${response.status} ${response.statusText}`;
    super(message, query);
    this.name = "GraphQLFailedResponseError";
  }

  private _responseText: string | undefined;

  private async getResponseText() {
    if (!this._responseText) this._responseText = await this.response.text();
    return this._responseText;
  }

  get responseText() {
    return this.getResponseText();
  }
}

export class UnexpectedStructureError extends GraphQLFetchError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(public readonly query: DocumentNode, public readonly data: any) {
    const message = "Got successful response with unexpected data structure!";
    super(message, query);
    this.name = "GraphQLUnexpectedStructureError";
  }

  get json() {
    return JSON.stringify(this.data);
  }
}
