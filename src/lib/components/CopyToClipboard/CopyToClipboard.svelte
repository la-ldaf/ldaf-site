<script lang="ts">
  import "./CopyToClipboard.scss";
  import Button from "$lib/components/Button";
  import Icon from "$lib/components/Icon";
  import { url as copyIcon } from "$icons/content_copy";
  import { url as successIcon } from "$icons/check_circle";
  import { url as errorIcon } from "$icons/error";

  export let contentToCopy: string;
  export let successMessage: string = "";

  type Status = "pending" | "success" | "error";
  let status: Status = "pending";

  type StatusDisplayMap = {
    [statusType in Status]: {
      icon: string;
      buttonClass: string;
      messageClass: string;
      messageContent: string;
    };
  };
  const statusDisplayMap: StatusDisplayMap = {
    pending: {
      icon: copyIcon,
      buttonClass: "",
      messageClass: "display--none",
      messageContent: "",
    },
    success: {
      icon: successIcon,
      buttonClass: "copy-success-icon",
      messageClass: "display--inline copy-success-message",
      messageContent: successMessage ? successMessage : "Copied to clipboard!",
    },
    error: {
      icon: errorIcon,
      buttonClass: "copy-error-icon",
      messageClass: "display--inline copy-error-message",
      messageContent: "Failed to copy to clipboard.",
    },
  };

  $: statusDisplay = statusDisplayMap[status];

  const copyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      status = "success";
    } catch (err) {
      console.error("failed to copy: ", err);
      status = "error";
    }
    setTimeout(() => (status = "pending"), 3000);
  };
</script>

<Button
  class={statusDisplay.buttonClass}
  unstyled={true}
  on:click={() => copyToClipboard(contentToCopy)}
>
  <Icon src={statusDisplay.icon} title="Copy to clipboard" />
</Button>
<div class="font-sans-3xs {statusDisplay.messageClass}">
  {statusDisplay.messageContent}
</div>
