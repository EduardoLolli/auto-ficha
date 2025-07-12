import styled from "styled-components";

const StyledHomePage = styled("div")`
  @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);

  background: linear-gradient(to bottom right, #4a148c, #1a237e);
  /* De roxo escuro para azul escuro */
  /* p-8 (8 * 0.25rem) */
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;

  .main-container {
    align-items: center;
  }

  /*! tailwindcss v3.4.11 | MIT License | https://tailwindcss.com*/
  *,
  :after,
  :before {
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
  }

  :after,
  :before {
    --tw-content: "";
  }

  :host,
  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    font-family: Open Sans, ui-sans-serif, system-ui, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-feature-settings: normal;
    font-variation-settings: normal;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    line-height: inherit;
    margin: 0;
    height: 100vh;
  }

  hr {
    border-top-width: 1px;
    color: inherit;
    height: 0;
  }

  abbr:where([title]) {
    text-decoration: underline dotted;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      Liberation Mono, Courier New, monospace;
    font-feature-settings: normal;
    font-size: 1em;
    font-variation-settings: normal;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    border-collapse: collapse;
    border-color: inherit;
    text-indent: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 100%;
    font-variation-settings: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  input:where([type="button"]),
  input:where([type="reset"]),
  input:where([type="submit"]) {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  :-moz-focusring {
    outline: auto;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  summary {
    display: list-item;
  }

  blockquote,
  dd,
  dl,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  p,
  pre {
    margin: 0;
  }

  fieldset {
    margin: 0;
  }

  fieldset,
  legend {
    padding: 0;
  }

  menu,
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  dialog {
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: #9ca3af;
    opacity: 1;
  }

  [role="button"],
  button {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }

  audio,
  canvas,
  embed,
  iframe,
  img,
  object,
  svg,
  video {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  [hidden] {
    display: none;
  }

  *,
  :after,
  :before {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style: ;
  }

  ::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style: ;
  }

  #webcrumbs .absolute {
    position: absolute;
  }

  #webcrumbs .relative {
    position: relative;
  }

  #webcrumbs .inset-0 {
    inset: 0;
  }

  #webcrumbs .bottom-0 {
    bottom: 0;
  }

  #webcrumbs .left-0 {
    left: 0;
  }

  #webcrumbs .right-0 {
    right: 0;
  }

  #webcrumbs .top-0 {
    top: 0;
  }

  #webcrumbs .z-10 {
    z-index: 10;
  }

  #webcrumbs .my-1 {
    margin-top: 4px;
  }

  #webcrumbs .mb-1,
  #webcrumbs .my-1 {
    margin-bottom: 4px;
  }

  #webcrumbs .mb-2 {
    margin-bottom: 8px;
  }

  #webcrumbs .mb-4 {
    margin-bottom: 16px;
  }

  #webcrumbs .mb-6 {
    margin-bottom: 24px;
  }

  #webcrumbs .mb-8 {
    margin-bottom: 32px;
  }

  #webcrumbs .ml-3 {
    margin-left: 12px;
  }

  #webcrumbs .mr-2 {
    margin-right: 8px;
  }

  #webcrumbs .mr-3 {
    margin-right: 12px;
  }

  #webcrumbs .mr-4 {
    margin-right: 16px;
  }

  #webcrumbs .mr-6 {
    margin-right: 24px;
  }

  #webcrumbs .mt-2 {
    margin-top: 8px;
  }

  #webcrumbs .mt-3 {
    margin-top: 12px;
  }

  #webcrumbs .mt-6 {
    margin-top: 24px;
  }

  #webcrumbs .mt-auto {
    margin-top: auto;
  }

  #webcrumbs .flex {
    display: flex;
  }

  #webcrumbs .grid {
    display: grid;
  }

  #webcrumbs .h-12 {
    height: 48px;
  }

  #webcrumbs .h-16 {
    height: 64px;
  }

  #webcrumbs .h-2 {
    height: 8px;
  }

  #webcrumbs .h-32 {
    height: 128px;
  }

  #webcrumbs .h-80 {
    height: 320px;
  }

  #webcrumbs .h-\[600px\] {
    height: 600px;
  }

  #webcrumbs .h-\[800px\] {
    height: 800px;
  }

  #webcrumbs .h-full {
    height: 100%;
  }

  #webcrumbs .w-1\/3 {
    width: 33.333333%;
  }

  #webcrumbs .w-12 {
    width: 48px;
  }

  #webcrumbs .w-16 {
    width: 64px;
  }

  #webcrumbs .w-2\/3 {
    width: 66.666667%;
  }

  #webcrumbs .w-64 {
    width: 256px;
  }

  #webcrumbs .w-\[90\%\] {
    width: 90%;
  }

  #webcrumbs .w-full {
    width: 100%;
  }

  #webcrumbs .flex-1 {
    flex: 1 1 0%;
  }

  #webcrumbs .transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  #webcrumbs .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  #webcrumbs .flex-row {
    flex-direction: row;
  }

  #webcrumbs .items-center {
    align-items: center;
  }

  #webcrumbs .justify-center {
    justify-content: center;
  }

  #webcrumbs .justify-between {
    justify-content: space-between;
  }

  #webcrumbs .gap-4 {
    gap: 16px;
  }

  #webcrumbs :is(.space-x-2 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(8px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(8px * var(--tw-space-x-reverse));
  }

  #webcrumbs :is(.space-x-3 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(12px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(12px * var(--tw-space-x-reverse));
  }

  #webcrumbs :is(.space-x-4 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(16px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(16px * var(--tw-space-x-reverse));
  }

  #webcrumbs :is(.space-x-6 > :not([hidden]) ~ :not([hidden])) {
    --tw-space-x-reverse: 0;
    margin-left: calc(24px * (1 - var(--tw-space-x-reverse)));
    margin-right: calc(24px * var(--tw-space-x-reverse));
  }

  #webcrumbs .overflow-hidden {
    overflow: hidden;
  }

  #webcrumbs .overflow-y-auto {
    overflow-y: auto;
  }

  #webcrumbs .rounded {
    border-radius: 12px;
  }

  #webcrumbs .rounded-full {
    border-radius: 9999px;
  }

  #webcrumbs .rounded-lg {
    border-radius: 24px;
  }

  #webcrumbs .border {
    border-width: 1px;
  }

  #webcrumbs .border-2 {
    border-width: 2px;
  }

  #webcrumbs .border-b-2 {
    border-bottom-width: 2px;
  }

  #webcrumbs .border-t {
    border-top-width: 1px;
  }

  #webcrumbs .border-amber-500 {
    --tw-border-opacity: 1;
    border-color: rgb(245 158 11 / var(--tw-border-opacity));
  }

  #webcrumbs .border-indigo-700 {
    --tw-border-opacity: 1;
    border-color: rgb(67 56 202 / var(--tw-border-opacity));
  }

  #webcrumbs .border-indigo-800 {
    --tw-border-opacity: 1;
    border-color: rgb(55 48 163 / var(--tw-border-opacity));
  }

  #webcrumbs .border-indigo-900 {
    --tw-border-opacity: 1;
    border-color: rgb(49 46 129 / var(--tw-border-opacity));
  }

  #webcrumbs .bg-amber-600 {
    --tw-bg-opacity: 1;
    background-color: rgb(217 119 6 / var(--tw-bg-opacity));
  }

  #webcrumbs .bg-black {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  }

  #webcrumbs .bg-blue-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  }

  #webcrumbs .bg-gray-700 {
    --tw-bg-opacity: 1;
    background-color: rgb(55 65 81 / var(--tw-bg-opacity));
  }

  #webcrumbs .bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  }

  #webcrumbs .bg-indigo-800 {
    --tw-bg-opacity: 1;
    background-color: rgb(55 48 163 / var(--tw-bg-opacity));
  }

  #webcrumbs .bg-indigo-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(49 46 129 / var(--tw-bg-opacity));
  }

  #webcrumbs .bg-purple-700 {
    --tw-bg-opacity: 1;
    background-color: rgb(126 34 206 / var(--tw-bg-opacity));
  }

  #webcrumbs .bg-red-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(239 68 68 / var(--tw-bg-opacity));
  }

  #webcrumbs .bg-opacity-50 {
    --tw-bg-opacity: 0.5;
  }

  #webcrumbs .bg-opacity-60 {
    --tw-bg-opacity: 0.6;
  }

  #webcrumbs .bg-opacity-70 {
    --tw-bg-opacity: 0.7;
  }

  #webcrumbs .bg-opacity-80 {
    --tw-bg-opacity: 0.8;
  }

  #webcrumbs .bg-gradient-to-b {
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  }

  #webcrumbs .bg-gradient-to-br {
    background-image: linear-gradient(
      to bottom right,
      var(--tw-gradient-stops)
    );
  }

  #webcrumbs .bg-gradient-to-t {
    background-image: linear-gradient(to top, var(--tw-gradient-stops));
  }

  #webcrumbs .from-indigo-900 {
    --tw-gradient-from: #312e81 var(--tw-gradient-from-position);
    --tw-gradient-to: rgba(49, 46, 129, 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  }

  #webcrumbs .from-purple-900 {
    --tw-gradient-from: #581c87 var(--tw-gradient-from-position);
    --tw-gradient-to: rgba(88, 28, 135, 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  }

  #webcrumbs .to-indigo-900 {
    --tw-gradient-to: #312e81 var(--tw-gradient-to-position);
  }

  #webcrumbs .to-transparent {
    --tw-gradient-to: transparent var(--tw-gradient-to-position);
  }

  #webcrumbs .object-cover {
    object-fit: cover;
  }

  #webcrumbs .p-2 {
    padding: 8px;
  }

  #webcrumbs .p-3 {
    padding: 12px;
  }

  #webcrumbs .p-4 {
    padding: 16px;
  }

  #webcrumbs .p-5 {
    padding: 20px;
  }

  #webcrumbs .p-6 {
    padding: 24px;
  }

  #webcrumbs .p-8 {
    padding: 32px;
  }

  #webcrumbs .px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }

  #webcrumbs .py-1 {
    padding-bottom: 4px;
    padding-top: 4px;
  }

  #webcrumbs .py-2 {
    padding-top: 8px;
  }

  #webcrumbs .pb-2,
  #webcrumbs .py-2 {
    padding-bottom: 8px;
  }

  #webcrumbs .text-3xl {
    font-size: 30px;
    line-height: 36px;
  }

  #webcrumbs .text-4xl {
    font-size: 36px;
    line-height: 41.4px;
  }

  #webcrumbs .text-sm {
    font-size: 14px;
    line-height: 21px;
  }

  #webcrumbs .text-xl {
    font-size: 20px;
    line-height: 28px;
  }

  #webcrumbs .text-xs {
    font-size: 12px;
    line-height: 19.200000000000003px;
  }

  #webcrumbs .font-bold {
    font-weight: 700;
  }

  #webcrumbs .font-medium {
    font-weight: 500;
  }

  #webcrumbs .uppercase {
    text-transform: uppercase;
  }

  #webcrumbs .leading-relaxed {
    line-height: 1.625;
  }

  #webcrumbs .tracking-wider {
    letter-spacing: 0.05em;
  }

  #webcrumbs .text-amber-400 {
    --tw-text-opacity: 1;
    color: rgb(251 191 36 / var(--tw-text-opacity));
  }

  #webcrumbs .text-amber-500 {
    --tw-text-opacity: 1;
    color: rgb(245 158 11 / var(--tw-text-opacity));
  }

  #webcrumbs .text-gray-200 {
    --tw-text-opacity: 1;
    color: rgb(229 231 235 / var(--tw-text-opacity));
  }

  #webcrumbs .text-gray-300 {
    --tw-text-opacity: 1;
    color: rgb(209 213 219 / var(--tw-text-opacity));
  }

  #webcrumbs .text-indigo-100 {
    --tw-text-opacity: 1;
    color: rgb(224 231 255 / var(--tw-text-opacity));
  }

  #webcrumbs .text-indigo-200 {
    --tw-text-opacity: 1;
    color: rgb(199 210 254 / var(--tw-text-opacity));
  }

  #webcrumbs .text-indigo-300 {
    --tw-text-opacity: 1;
    color: rgb(165 180 252 / var(--tw-text-opacity));
  }

  #webcrumbs .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  #webcrumbs .backdrop-blur-sm {
    --tw-backdrop-blur: blur(4px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur)
      var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
      var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
      var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
      var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
      var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
      var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
      var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
      var(--tw-backdrop-sepia);
  }

  #webcrumbs .transition-all {
    transition-duration: 0.15s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  #webcrumbs .transition-colors {
    transition-duration: 0.15s;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  #webcrumbs .transition-transform {
    transition-duration: 0.15s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  #webcrumbs .duration-300 {
    transition-duration: 0.3s;
  }

  #webcrumbs .duration-500 {
    transition-duration: 0.5s;
  }

  #webcrumbs {
    font-family: Open Sans !important;
    font-size: 16px !important;
  }

  #webcrumbs .after\:absolute:after {
    content: var(--tw-content);
    position: absolute;
  }

  #webcrumbs .after\:bottom-0:after {
    bottom: 0;
    content: var(--tw-content);
  }

  #webcrumbs .after\:left-0:after {
    content: var(--tw-content);
    left: 0;
  }

  #webcrumbs .after\:h-0\.5:after {
    content: var(--tw-content);
    height: 2px;
  }

  #webcrumbs .after\:w-0:after {
    content: var(--tw-content);
    width: 0;
  }

  #webcrumbs .after\:bg-amber-400:after {
    content: var(--tw-content);
    --tw-bg-opacity: 1;
    background-color: rgb(251 191 36 / var(--tw-bg-opacity));
  }

  #webcrumbs .after\:transition-all:after {
    content: var(--tw-content);
    transition-duration: 0.15s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  #webcrumbs .hover\:rotate-12:hover {
    --tw-rotate: 12deg;
  }

  #webcrumbs .hover\:rotate-12:hover,
  #webcrumbs .hover\:scale-105:hover {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  #webcrumbs .hover\:scale-105:hover {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
  }

  #webcrumbs .hover\:scale-110:hover {
    --tw-scale-x: 1.1;
    --tw-scale-y: 1.1;
  }

  #webcrumbs .hover\:scale-110:hover,
  #webcrumbs .hover\:scale-\[1\.02\]:hover {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  #webcrumbs .hover\:scale-\[1\.02\]:hover {
    --tw-scale-x: 1.02;
    --tw-scale-y: 1.02;
  }

  #webcrumbs .hover\:border-amber-500:hover {
    --tw-border-opacity: 1;
    border-color: rgb(245 158 11 / var(--tw-border-opacity));
  }

  #webcrumbs .hover\:bg-amber-500:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(245 158 11 / var(--tw-bg-opacity));
  }

  #webcrumbs .hover\:bg-indigo-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(67 56 202 / var(--tw-bg-opacity));
  }

  #webcrumbs .hover\:bg-purple-600:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(147 51 234 / var(--tw-bg-opacity));
  }

  #webcrumbs .hover\:text-amber-400:hover {
    --tw-text-opacity: 1;
    color: rgb(251 191 36 / var(--tw-text-opacity));
  }

  #webcrumbs .hover\:shadow-lg:hover {
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  #webcrumbs .hover\:shadow-purple-700\/30:hover {
    --tw-shadow-color: rgba(126, 34, 206, 0.3);
    --tw-shadow: var(--tw-shadow-colored);
  }

  #webcrumbs .hover\:after\:w-full:hover:after {
    content: var(--tw-content);
    width: 100%;
  }

  #webcrumbs :is(.group:hover .group-hover\:rotate-12) {
    --tw-rotate: 12deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  #webcrumbs :is(.group:hover .group-hover\:animate-pulse) {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

export default StyledHomePage;
