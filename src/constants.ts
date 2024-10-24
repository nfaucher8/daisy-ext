/* eslint-env node */
/**
 * New colors provided by DaisyUI
 *
 * Mirrors https://github.com/saadeghi/daisyui/blob/master/src/theming/colorNames.js
 */
export const colorNames = {
  primary: "--p",
  "primary-content": "--pc",

  secondary: "--s",
  "secondary-content": "--sc",

  accent: "--a",
  "accent-content": "--ac",

  neutral: "--n",
  "neutral-content": "--nc",

  "base-100": "--b1",
  "base-200": "--b2",
  "base-300": "--b3",
  "base-content": "--bc",

  info: "--in",
  "info-content": "--inc",

  success: "--su",
  "success-content": "--suc",

  warning: "--wa",
  "warning-content": "--wac",

  error: "--er",
  "error-content": "--erc"
}

/**
 * Fallback colors provided by DaisyUI
 *
 * Mirrors https://github.com/saadeghi/daisyui/blob/master/src/base/colors.css
 */
export const fallbackNames = {
  primary: "--fallback-p",
  "primary-content": "--fallback-pc",

  secondary: "--fallback-s",
  "secondary-content": "--fallback-sc",

  accent: "--fallback-a",
  "accent-content": "--fallback-ac",

  neutral: "--fallback-n",
  "neutral-content": "--fallback-nc",

  "base-100": "--fallback-b1",
  "base-200": "--fallback-b2",
  "base-300": "--fallback-b3",
  "base-content": "--fallback-bc",

  info: "--fallback-in",
  "info-content": "--fallback-inc",

  success: "--fallback-su",
  "success-content": "--fallback-suc",

  warning: "--fallback-wa",
  "warning-content": "--fallback-wac",

  error: "--fallback-er",
  "error-content": "--fallback-erc"
}

/**
 * Steps provided when color mixing
 *
 * Tailwind normally only provides `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950` but I added steps every 50
 * so that color mixing could be a bit more granular. To switch back to tailwinds shade stops just remove the
 * undesired shade entries
 */
export const colorShades = {
  50: "5%",
  100: "10%",
  150: "15%",
  200: "20%",
  250: "25%",
  300: "30%",
  350: "35%",
  400: "40%",
  450: "45%",
  500: "50%",
  550: "55%",
  600: "60%",
  650: "65%",
  700: "70%",
  750: "75%",
  800: "80%",
  850: "85%",
  900: "90%",
  950: "95%"
}

/**
 * Properties that `buildDualColorStyles()` will build dual color utility classes for (this does not need to include
 * pseudo selectors like :hover, or :group-active)
 *
 * These are taken from properties in https://github.com/tailwindlabs/tailwindcss/blob/next/packages/tailwindcss/src/utilities.ts
 * that use the `--color` theme key
 */
export const colorProperties = {
  accent: "accent-color",
  bg: "background-color",
  border: "border-color",
  caret: "caret-color",
  decoration: "text-decoration-color",
  // divide: "border-color",  // TODO: divide requires rules so that the first item doesn't have a border
  fill: "fill",
  outline: "outlineColor",
  placeholder: "placeholderColor",
  ring: "--tw-ring-color",
  "ring-offset": "--tw-ring-offset-color",
  // shadow: "--tw-shadow-color",  // Currently not working
  stroke: "stroke",
  text: "color",
}
