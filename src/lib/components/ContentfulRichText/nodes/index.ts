import type { SvelteComponent } from "svelte";
import { default as document } from "./Document.svelte";
import { default as paragraph } from "./Paragraph.svelte";
import { default as text } from "./Text.svelte";

const nodes: Record<string, typeof SvelteComponent> = { document, paragraph, text };
export default nodes;
