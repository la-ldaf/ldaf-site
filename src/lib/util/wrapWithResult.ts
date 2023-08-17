import type { Result } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default <F extends (...args: any[]) => any>(fn: F) =>
  (...args: Parameters<F>): Result<ReturnType<F>> => {
    try {
      return { ok: true, value: fn(...args) };
    } catch (err) {
      return { ok: false, error: err };
    }
  };
