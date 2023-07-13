import type { WithSomeLoggerArg } from "./types";
import renderMessageToPlainText from "./renderMessageToPlainText";

export default (async (_, message) => {
  const renderedToPlainText = renderMessageToPlainText(message);
  const spaceOut = (renderedToPlainText.match(/\n/g) ?? "").length > 1;
  console.log(`${spaceOut ? "\n" : ""}LOG: ${renderedToPlainText}${spaceOut ? "\n" : ""}`);
}) satisfies WithSomeLoggerArg<"logRawMessage">;
