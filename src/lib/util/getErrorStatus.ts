const supportedErrorTypes = ["object", "number", "string"];

// This function must not error
const getStatusFromScalar = (maybeStatus: number | string): number | undefined => {
  if (maybeStatus === "") return;
  switch (typeof maybeStatus) {
    case "number":
      return maybeStatus;
    case "string": {
      // !error above already catches empty strings
      try {
        // e.g., "401"
        return parseInt(maybeStatus.trim());
      } catch (_) {
        // do nothing
      }
      try {
        // e.g., "401 Unauthorized"
        const trimmed = maybeStatus.trimStart();
        return parseInt(trimmed.slice(0, trimmed.search(/\s/)));
      } catch (_) {
        // do nothing
      }
    }
  }
};

export default (error: unknown): number | undefined => {
  if ((!error && error !== "") || !supportedErrorTypes.includes(typeof error)) return undefined;
  switch (typeof error) {
    case "number":
    case "string":
      return getStatusFromScalar(error);
    case "object": {
      if ("status" in error) {
        if (typeof error.status === "number" || typeof error.status === "string") {
          const maybeStatus = getStatusFromScalar(error.status);
          if (maybeStatus) return maybeStatus;
        }
        if (
          typeof error.status === "object" &&
          error.status &&
          "code" in error.status &&
          (typeof error.status.code === "string" || typeof error.status.code === "number")
        ) {
          const maybeStatus = getStatusFromScalar(error.status.code);
          if (maybeStatus) return maybeStatus;
        }
      }
      if ("code" in error && (typeof error.code === "number" || typeof error.code === "string")) {
        const maybeStatus = getStatusFromScalar(error.code);
        if (maybeStatus) return maybeStatus;
      }
      if ("message" in error && typeof error.message === "string") {
        const maybeStatus = getStatusFromScalar(error.message);
        if (maybeStatus) return maybeStatus;
      }
    }
  }
};
