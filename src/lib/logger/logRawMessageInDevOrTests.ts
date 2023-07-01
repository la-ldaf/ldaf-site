import { renderMessageToPlainText } from "./logMessages";
import type { WithSomeLoggerArg } from "./types";

export default (async (_, message) => {
  const renderedToPlainText = renderMessageToPlainText(message);
  const spaceOut = (renderedToPlainText.match(/\n/g) ?? "").length > 1;
  console.log(`${spaceOut ? "\n" : ""}LOG: ${renderedToPlainText}${spaceOut ? "\n" : ""}`);
}) satisfies WithSomeLoggerArg<"logRawMessage">;
