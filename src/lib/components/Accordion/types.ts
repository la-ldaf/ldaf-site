import type { Writable } from "svelte/store";

export type AccordionItemType = {
  id: string;
  expanded: boolean;
};

export type AccordionContextItems = Record<string, boolean>;

export type AccordionContext = {
  items: Writable<AccordionContextItems>;
  add: (item: AccordionItemType) => AccordionContext;
  remove: (item: AccordionItemType) => AccordionContext;
  toggle: (item: AccordionItemType) => AccordionContext;
};
