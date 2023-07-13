import type { AnyMessage } from "./types";
import renderMessageToPlainText from "./renderMessageToPlainText";

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
