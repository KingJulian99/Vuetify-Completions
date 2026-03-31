/**
 * Utility function that converts Vuetify class names into actual CSS strings.
 *
 * Features:
 * 1. Handles spacing, margin, padding, border, and other utility classes.
 * 2. Converts shorthand Vuetify classes like `m-4`, `p-2`, `border-lg` into CSS rules.
 * 3. Returns a CSS string suitable for display in hover previews or programmatic use.
 *
 * Example:
 *   toCss("m-2")       => "margin: 8px;"
 *   toCss("p-4")       => "padding: 16px;"
 *   toCss("border-lg") => "border-width: 4px;"
 *
 * Usage:
 *   import { toCss } from "../utils/toCss";
 *   const css = toCss("m-2"); // returns "margin: 8px;"
 *
 * Notes:
 * - Returns `undefined` if the class cannot be converted.
 * - Used primarily in merge.ts to fill the `css` property for `VuetifyClass`.
 */

export function toCss(className: string): string {
  // Spacing
    const spacingMatch = className.match(/([mp][trblxya]?)-(\d+)/);
    if (spacingMatch) {
        const prop = spacingMatch[1][0] === "m" ? "margin" : "padding";
        const dir = spacingMatch[1].slice(1) || "a"; // FIX: default to 'a'
        const value = Number(spacingMatch[2]) * 4;

        const sides: Record<string, string[]> = {
        t: ["top"],
        b: ["bottom"],
        l: ["left"],
        r: ["right"],
        x: ["left", "right"],
        y: ["top", "bottom"],
        a: [""],
        };

        return sides[dir]
        .map((side) =>
            side ? `${prop}-${side}: ${value}px;` : `${prop}: ${value}px;`,
        )
        .join(" ");
    }

    if (className === "mx-auto") {
        return "margin-left: auto; margin-right: auto;";
    }

    // Display & Flex
    const flexMap: Record<string, string> = {
        "d-flex": "display: flex;",
        "d-inline-flex": "display: inline-flex;",
        "d-block": "display: block;",
        "d-inline": "display: inline;",
        "d-none": "display: none;",
        "flex-column": "flex-direction: column;",
        "flex-row": "flex-direction: row;",
        "flex-wrap": "flex-wrap: wrap;",
        "flex-nowrap": "flex-wrap: nowrap;",
        "justify-start": "justify-content: flex-start;",
        "justify-center": "justify-content: center;",
        "justify-end": "justify-content: flex-end;",
        "justify-space-between": "justify-content: space-between;",
        "justify-space-around": "justify-content: space-around;",
        "align-start": "align-items: flex-start;",
        "align-center": "align-items: center;",
        "align-end": "align-items: flex-end;",
        "align-stretch": "align-items: stretch;",
    };
    if (flexMap[className]) {
        return flexMap[className];
    }

    // Borders & Rounded
    const roundedMap: Record<string, string> = {
        rounded: "border-radius: 4px;",
        "rounded-0": "border-radius: 0;",
        "rounded-sm": "border-radius: 2px;",
        "rounded-md": "border-radius: 4px;",
        "rounded-lg": "border-radius: 8px;",
        "rounded-xl": "border-radius: 24px;",
        "rounded-pill": "border-radius: 9999px;",
        "rounded-circle": "border-radius: 50%;",
        "rounded-shaped": "border-radius: 24px 0;",
        "rounded-t": "border-top-left-radius: 4px; border-top-right-radius: 4px;",
        "rounded-t-0": "border-top-left-radius: 0; border-top-right-radius: 0;",
        "rounded-t-sm": "border-top-left-radius: 2px; border-top-right-radius: 2px;",
        "rounded-t-md": "border-top-left-radius: 4px; border-top-right-radius: 4px;",
        "rounded-t-lg": "border-top-left-radius: 8px; border-top-right-radius: 8px;",
        "rounded-t-xl": "border-top-left-radius: 24px; border-top-right-radius: 24px;",
        "rounded-t-pill": "border-top-left-radius: 9999px; border-top-right-radius: 9999px;",
        "rounded-t-circle": "border-top-left-radius: 50%; border-top-right-radius: 50%;",
        "rounded-t-shaped": "border-top-left-radius: 24px; border-top-right-radius: 0;",
        "rounded-te": "border-top-right-radius: 4px;",
        "rounded-te-0": "border-top-right-radius: 0;",
        "rounded-te-sm": "border-top-right-radius: 2px;",
        "rounded-te-md": "border-top-right-radius: 4px;",
        "rounded-te-lg": "border-top-right-radius: 8px;",
        "rounded-te-xl": "border-top-right-radius: 24px;",
        "rounded-te-pill": "border-top-right-radius: 9999px;",
        "rounded-te-circle": "border-top-right-radius: 50%;",
        "rounded-te-shaped": "border-top-right-radius: 24px; border-top-left-radius: 0;",
        "rounded-ts": "border-top-left-radius: 4px;",
        "rounded-ts-0": "border-top-left-radius: 0;",
        "rounded-ts-sm": "border-top-left-radius: 2px;",
        "rounded-ts-md": "border-top-left-radius: 4px;",
        "rounded-ts-lg": "border-top-left-radius: 8px;",
        "rounded-ts-xl": "border-top-left-radius: 24px;",
        "rounded-ts-pill": "border-top-left-radius: 9999px;",
        "rounded-ts-circle": "border-top-left-radius: 50%;",
        "rounded-ts-shaped": "border-top-left-radius: 24px; border-top-right-radius: 0;",
        "rounded-e": "border-inline-end-radius: 4px;",
        "rounded-e-0": "border-inline-end-radius: 0;",
        "rounded-e-sm": "border-inline-end-radius: 2px;",
        "rounded-e-md": "border-inline-end-radius: 4px;",
        "rounded-e-lg": "border-inline-end-radius: 8px;",
        "rounded-e-xl": "border-inline-end-radius: 24px;",
        "rounded-e-pill": "border-inline-end-radius: 9999px;",
        "rounded-e-circle": "border-inline-end-radius: 50%;",
        "rounded-e-shaped": "border-inline-end-radius: 0; border-inline-start-radius: 24px;",
        "rounded-b": "border-bottom-left-radius: 4px; border-bottom-right-radius: 4px;",
        "rounded-b-0": "border-bottom-left-radius: 0; border-bottom-right-radius: 0;",
        "rounded-b-sm": "border-bottom-left-radius: 2px; border-bottom-right-radius: 2px;",
        "rounded-b-md": "border-bottom-left-radius: 4px; border-bottom-right-radius: 4px;",
        "rounded-b-lg": "border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;",
        "rounded-b-xl": "border-bottom-left-radius: 24px; border-bottom-right-radius: 24px;",
        "rounded-b-pill": "border-bottom-left-radius: 9999px; border-bottom-right-radius: 9999px;",
        "rounded-b-circle": "border-bottom-left-radius: 50%; border-bottom-right-radius: 50%;",
        "rounded-b-shaped": "border-bottom-left-radius: 0; border-bottom-right-radius: 24px;",
        "rounded-be": "border-bottom-right-radius: 4px;",
        "rounded-be-0": "border-bottom-right-radius: 0;",
        "rounded-be-sm": "border-bottom-right-radius: 2px;",
        "rounded-be-md": "border-bottom-right-radius: 4px;",
        "rounded-be-lg": "border-bottom-right-radius: 8px;",
        "rounded-be-xl": "border-bottom-right-radius: 24px;",
        "rounded-be-pill": "border-bottom-right-radius: 9999px;",
        "rounded-be-circle": "border-bottom-right-radius: 50%;",
        "rounded-be-shaped": "border-bottom-right-radius: 24px; border-bottom-left-radius: 0;",
        "rounded-bs": "border-inline-start-radius: 4px;",
        "rounded-bs-0": "border-inline-start-radius: 0;",
        "rounded-bs-sm": "border-inline-start-radius: 2px;",
        "rounded-bs-md": "border-inline-start-radius: 4px;",
        "rounded-bs-lg": "border-inline-start-radius: 8px;",
        "rounded-bs-xl": "border-inline-start-radius: 24px;",
        "rounded-bs-pill": "border-inline-start-radius: 9999px;",
        "rounded-bs-circle": "border-inline-start-radius: 50%;",
        "rounded-bs-shaped": "border-inline-start-radius: 24px; border-inline-end-radius: 0;",
        "rounded-s": "border-inline-start-radius: 4px;",
        "rounded-s-0": "border-inline-start-radius: 0;",
        "rounded-s-sm": "border-inline-start-radius: 2px;",
        "rounded-s-md": "border-inline-start-radius: 4px;",
        "rounded-s-lg": "border-inline-start-radius: 8px;",
        "rounded-s-xl": "border-inline-start-radius: 24px;",
        "rounded-s-pill": "border-inline-start-radius: 9999px;",
        "rounded-s-circle": "border-inline-start-radius: 50%;",
        "rounded-s-shaped": "border-inline-start-radius: 24px; border-inline-end-radius: 0;",
        border: "border: 1px solid rgba(0,0,0,0.12);",
        "border-0": "border: 0;",
    };
    if (roundedMap[className]) {
        return roundedMap[className];
    }

    // Elevation
    if (className.startsWith("elevation")) {
        const level = Number(className.split("-")[1] || 0);
        return `box-shadow: /* elevation ${level} */;`;
    }

    // Typography
    const typographyMap: Record<string, string> = {
        "text-left": "text-align: left;",
        "text-center": "text-align: center;",
        "text-right": "text-align: right;",
        "font-weight-light": "font-weight: 300;",
        "font-weight-regular": "font-weight: 400;",
        "font-weight-medium": "font-weight: 500;",
        "font-weight-bold": "font-weight: 700;",
        "font-italic": "font-style: italic;",
    };
    if (typographyMap[className]) {
        return typographyMap[className];
    }

    // Text and background colors (theme)
    const colorMatch = className.match(
        /(text|bg)-([a-z]+)(?:-(lighten|darken)-?(\d)?)?/,
    );
    if (colorMatch) {
        const type = colorMatch[1]; // text or bg
        const color = colorMatch[2];
        const variant = colorMatch[3]; // lighten/darken
        const level = colorMatch[4] || "";
        return `${type}-color: ${color}${variant ? ` ${variant}-${level}` : ""};`;
    }

    // Sizing
    const sizeMatch = className.match(/([wh]-?(?:min|max)?)-(\d+|auto|100)/);
    if (sizeMatch) {
        const prop = sizeMatch[1];
        const value = sizeMatch[2];
        const map: Record<string, string> = {
        w: "width",
        h: "height",
        "min-w": "min-width",
        "max-w": "max-width",
        "min-h": "min-height",
        "max-h": "max-height",
        };
        return `${map[prop] || prop}: ${value === "100" ? "100%" : value}${value === "auto" ? "" : "px"};`;
    }

    // Positioning
    if (className.startsWith("position-")) {
        return `position: ${className.split("-")[1]};`;
    }
    const posMatch = className.match(/(top|right|bottom|left)-(\d+)/);
    if (posMatch) {
        const side = posMatch[1];
        const value = Number(posMatch[2]) * 4;
        return `${side}: ${value}px;`;
    }

    // Overflow & opacity
    const miscMap: Record<string, string> = {
        "overflow-hidden": "overflow: hidden;",
        "overflow-auto": "overflow: auto;",
        "cursor-pointer": "cursor: pointer;",
        "opacity-0": "opacity: 0;",
        "opacity-25": "opacity: 0.25;",
        "opacity-50": "opacity: 0.5;",
        "opacity-75": "opacity: 0.75;",
        "opacity-100": "opacity: 1;",
    };
    if (miscMap[className]) {
        return miscMap[className];
    }

    // Default fallback
    return "";
}
