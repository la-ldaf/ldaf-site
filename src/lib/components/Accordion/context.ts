import type { Writable } from "svelte/store";
import { getContext, setContext } from "svelte";

const key = Symbol("AccordionContext");

type AccordionContext = {
  expandedItems: Writable<Record<string, boolean>>;
  toggle: (id: string) => void;
};

export const setAccordionContext = (context: AccordionContext) =>
  setContext<AccordionContext>(key, context);
export const getAccordionContext = () => getContext<AccordionContext>(key);
