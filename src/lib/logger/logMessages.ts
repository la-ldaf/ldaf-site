import type { Message, PublicMessage, WithLoggerArg, WithPublicLoggerArg } from "./types";
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

export const getMessageFromPublicMessage = (message: PublicMessage): Message => ({
  ...message,
  messageType: "LOG_MESSAGE",
  context: { PUBLIC: { ...message.context } },
});
