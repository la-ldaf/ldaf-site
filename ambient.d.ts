// This file is explicitly included in the tsconfig.json, and is used to import global type
// declarations from our custom Vite plugins. This needs to be done using triple slash references,
// which are otherwise disabled.

/* eslint @typescript-eslint/triple-slash-reference: 0 */

/// <reference path="./vite-plugin-blurhash/index.d.ts"/>
/// <reference path="./vite-plugin-import-as-bundle-string/index.d.ts"/>
/// <reference path="./vite-plugin-ldaf-icon/index.d.ts"/>
