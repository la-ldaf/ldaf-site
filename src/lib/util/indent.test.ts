import { describe, it } from "vitest";
import indent from "./indent";

describe("indent", () => {
  it("indents multi-line text", () => {
    expect(
      indent(
        `\
abc
  def
ghi`,
        2
      )
    ).toEqual(`\
  abc
    def
  ghi`);
  });
});
