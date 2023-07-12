export default (error: unknown): string => {
  if (typeof error === "string") return error;
  if (typeof error === "number") return `${error}`;
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }
  return "[could not determine error message!]";
};
