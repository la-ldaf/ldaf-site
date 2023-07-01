import type {
  Message,
  PublicMessage,
  AnyMessage,
  Context,
  WithLoggerArg,
  WithPublicLoggerArg,
} from "./types";
import indent from "$lib/util/indent";
import { browser } from "$app/environment";

const logMessageDefaults: Message = {
  messageType: "LOG_MESSAGE",
  eventType: "INFO",
  message: "[unknown message]",
  source: "server",
  context: { PUBLIC: {} },
};

const publicMessageDefaults: PublicMessage = {
  ...logMessageDefaults,
  messageType: "PUBLIC_LOG_MESSAGE",
  source: browser ? "client" : "server",
  context: {},
};

export const newMessage: WithLoggerArg<"newMessage"> = ({ context }, init) => ({
  ...logMessageDefaults,
  ...init,
  context,
});

export const newPublicMessage: WithPublicLoggerArg<"newMessage"> = ({ context }, init) => ({
  ...publicMessageDefaults,
  ...init,
  context,
});

const getMessageFromPublicMessage = (message: PublicMessage): Message => ({
  ...message,
  messageType: "LOG_MESSAGE",
  context: { PUBLIC: { ...message.context } },
});

const renderObjectToPlainText = (obj: Record<string, unknown>) =>
  Object.entries(obj)
    .map(([key, val]) => `${key}: ${JSON.stringify(val, null, 2)}`)
    .join("\n");

const renderContextToPlainText = ({ PUBLIC: publicContext, ...privateContext }: Context) => {
  const renderedPrivateContext = renderObjectToPlainText(privateContext);
  const renderedPublicContext = renderObjectToPlainText(publicContext);
  return `\
${renderedPrivateContext ? `${renderedPrivateContext}\n` : ""}\
${renderedPublicContext ? `PUBLIC:\n${indent(renderedPublicContext, 2)}` : ""}`;
};

export const renderMessageToPlainText = (logMessage: AnyMessage) => {
  const { eventType, source, message, context } =
    logMessage.messageType === "PUBLIC_LOG_MESSAGE"
      ? getMessageFromPublicMessage(logMessage)
      : logMessage;
  const renderedContext = renderContextToPlainText(context);
  return `\
${eventType} (${source}): ${message}\
${renderedContext.length > 0 ? `\nContext:\n${indent(renderedContext, 2)}` : ""}`;
};

export const renderMessageToSlackMessage = (message: AnyMessage) => ({
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `\
\`\`\`
${renderMessageToPlainText(message)}
\`\`\`\
`,
      },
    },
  ],
});
