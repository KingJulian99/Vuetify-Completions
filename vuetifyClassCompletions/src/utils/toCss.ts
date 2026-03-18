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
        "rounded-sm": "border-radius: 2px;",
        "rounded-md": "border-radius: 8px;",
        "rounded-lg": "border-radius: 12px;",
        "rounded-xl": "border-radius: 24px;",
        "rounded-circle": "border-radius: 50%;",
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
