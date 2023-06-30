export default (error: unknown): number | undefined =>
  error && typeof error === "object" && "status" in error && typeof error.status === "number"
    ? error.status
    : undefined;
