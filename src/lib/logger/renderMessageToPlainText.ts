import type { AnyMessage, Context } from "./types";
import indent from "$lib/util/indent";
import { getMessageFromPublicMessage } from "./logMessages";

const renderObjectToPlainText = (obj: Record<string, unknown>) =>
  Object.entries(obj)
    .map(([key, val]) => {
      let valString: string;
      if (typeof val === "string") {
        valString = val;
      } else {
        valString = JSON.stringify(val, null, 2);
      }
      return `${key}: ${
        valString.indexOf("\n") === -1 ? ` ${valString}` : `\n${indent(valString, 2)}`
      }`;
    })
    .join("\n");

const renderContextToPlainText = ({ PUBLIC: publicContext, ...privateContext }: Context) => {
  const renderedPrivateContext = renderObjectToPlainText(privateContext);
  const renderedPublicContext = renderObjectToPlainText(publicContext);
  return `\
${renderedPrivateContext ? `${renderedPrivateContext}\n` : ""}\
${renderedPublicContext ? `PUBLIC:\n${indent(renderedPublicContext, 2)}` : ""}`;
};

const renderMessageToPlainText = (logMessage: AnyMessage) => {
  const { eventType, source, message, context } =
    logMessage.messageType === "PUBLIC_LOG_MESSAGE"
      ? getMessageFromPublicMessage(logMessage)
      : logMessage;
  const renderedContext = renderContextToPlainText(context);
  return `\
${eventType} (${source}): ${message}\
${renderedContext.length > 0 ? `\nContext:\n${indent(renderedContext, 2)}` : ""}`;
};

export default renderMessageToPlainText;
