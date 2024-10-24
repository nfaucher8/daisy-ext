/* eslint-env node */
import plugin from "tailwindcss/plugin"

import { colorNames, colorShades, fallbackNames } from "./constants.js"

/**
 * DaisyUI includes `neutral shades` https://github.com/saadeghi/daisyui/blob/master/src/index.js#L133 but because they
 * aren't in an object tailwind matches them first. Since daisy-ext adds shades to the DaisyUI colors we need to
 * override these shades since we are actually using them now
 */
function neutralFix() {
  return {
    "neutral-50":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 5%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)",
    "neutral-100":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 10%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)",
    "neutral-200":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 20%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)",
    "neutral-300":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 30%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)",
    "neutral-400":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 40%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)",
    "neutral-500":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 50%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)",
    "neutral-600":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 60%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)",
    "neutral-700":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 70%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)",
    "neutral-800":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 80%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)",
    "neutral-900":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 90%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)",
    "neutral-950":
      "color-mix(in oklab, color-mix(in oklab, var(--fallback-n, oklch(var(--n))) 95%, oklch(var(--b1))) calc(<alpha-value> * 100%), transparent)"
  }
}

/**
 * Builds colors added by `daisy-ext`. Builds "mixed" color styles with a single input color. This allows classes like
 * `bg-primary-500` to work (primary is mixed 50% against base-100). Also builds "mixed" color styles with 2 input
 * colors. This allows classes like `bg-primary-500-primary-content` to work (primary is mixed 50% against
 * primary-content).
 */
function buildColorStyles() {
  const builtColors = {}

  for (const [color1_class, color1_variable] of Object.entries(colorNames)) {
    const builtShades = {
      DEFAULT: `var(${fallbackNames[color1_class]},oklch(var(${color1_variable})/<alpha-value>))`
    }

    for (const [shade_class, shade_value] of Object.entries(colorShades)) {
      builtShades[shade_class] = {
        DEFAULT: `color-mix(in oklab, color-mix(in oklab, var(${fallbackNames[color1_class]}, oklch(var(${color1_variable}))) ${shade_value}, var(--fallback-b1, oklch(var(--b1)))) calc(<alpha-value> * 100%), transparent)`
      }

      for (const [color2_class, color2_variable] of Object.entries(colorNames)) {
        if (color1_class === color2_class) {
          continue
        }

        builtShades[shade_class][color2_class] =
          `color-mix(in oklab, color-mix(in oklab, var(${fallbackNames[color1_class]}, oklch(var(${color1_variable}))) ${shade_value}, var(${fallbackNames[color2_class]}, oklch(var(${color2_variable})))) calc(<alpha-value> * 100%), transparent)`
      }
    }

    builtColors[color1_class] = builtShades
  }

  return {
    ...builtColors,
    ...neutralFix()
  }
}

export default plugin(() => {}, {
  theme: {
    extend: {
      colors: {
        ...buildColorStyles()
      }
    }
  }
})
