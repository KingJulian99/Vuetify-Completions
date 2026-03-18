/**
 * This script generates a single TypeScript module (`vuetify-classes.ts`) that contains
 * all Vuetify utility and color classes for use in a VS Code extension.
 *
 * Features:
 * 1. Loads scraped utility classes (spacing, layout, text, borders, etc.) from `vuetify-docs-classes.json`.
 * 2. Generates full color palette classes, including base colors, lighten/darken/accent variants.
 * 3. Merges scraped utilities and color classes into a single `Record<string, VuetifyClass>` object.
 * 4. Automatically:
 *    - Skips unwanted spacing labels like "Extra small", "Small", etc.
 *    - Remaps layout visibility classes so the key becomes the CSS and the CSS string is empty.
 * 5. Outputs a fully typed TypeScript file ready for VS Code autocomplete and hover support.
 *
 * Type definition used:
 * export type VuetifyClass = {
 *   css: string; // CSS string to show in hover or apply programmatically
 *   type: "spacing" | "color" | "layout" | "text";
 *   color?: string; // Only set for color classes; reflects exact color/variant
 * };
 *
 * Usage:
 *   1. Run `npx ts-node merge.ts` to generate `vuetify-classes.ts`.
 *   2. Import in your extension:
 *        import { vuetifyClasses } from "../data/vuetify-classes";
 *   3. Access any class:
 *        const cls = vuetifyClasses["bg-red-darken-1"];
 *        console.log(cls.css, cls.type, cls.color);
 */

import fs from "fs";
import { toCss } from "../utils/toCss";

type VuetifyClass = {
    css: string;
    type: "spacing" | "color" | "layout" | "text";
    color?: string;
};

// Load scraped JSON
const scraped: any[] = JSON.parse(
     fs.readFileSync("../data/vuetify-docs-classes.json", "utf-8"),
);

// Define color palette
const COLORS = [
    "red",
    "pink",
    "purple",
    "deep-purple",
    "indigo",
    "blue",
    "light-blue",
    "cyan",
    "teal",
    "green",
    "light-green",
    "lime",
    "yellow",
    "amber",
    "orange",
    "deep-orange",
    "brown",
    "grey",
    "blue-grey",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "error",
];
const LIGHTEN = [
    "lighten-1",
    "lighten-2",
    "lighten-3",
    "lighten-4",
    "lighten-5",
];
const DARKEN = ["darken-1", "darken-2", "darken-3", "darken-4"];
const ACCENT = ["accent-1", "accent-2", "accent-3", "accent-4"];

// 3️⃣ Generate color classes
const colorClasses: Record<string, VuetifyClass> = {};
COLORS.forEach((color) => {
    // base
    colorClasses[`text-${color}`] = {
        css: `color: var(--v-${color}-base);`,
        type: "color",
        color,
    };
    colorClasses[`bg-${color}`] = {
        css: `background-color: var(--v-${color}-base);`,
        type: "color",
        color,
    };
    // variants
    [...LIGHTEN, ...DARKEN, ...ACCENT].forEach((variant) => {
        const fullVariant = `${color}-${variant}`;
        colorClasses[`text-${fullVariant}`] = {
        css: `color: var(--v-${fullVariant});`,
        type: "color",
        color: fullVariant,
        };
        colorClasses[`bg-${fullVariant}`] = {
        css: `background-color: var(--v-${fullVariant});`,
        type: "color",
        color: fullVariant,
        };
    });
});

// Map scraped category to type
const categoryMap: Record<string, "spacing" | "color" | "layout" | "text"> = {
    spacing: "spacing",
    borders: "layout",
    flex: "layout",
    display: "layout",
    text: "text",
    "text-and-typography": "text",
    sizing: "layout",
    position: "layout",
    colors: "color",
    elevation: "layout",
};

const vuetifyClasses: Record<string, VuetifyClass> = {};

// Define spacing names to skip
const skipSpacing = [
    "Extra small",
    "Small",
    "Medium",
    "Large",
    "Extra large",
    "Extra extra large"
];

/**
 * Transforms Vuetify display visibility helper rows (e.g. "Hidden only on md")
 * into individual class entries (e.g. "d-md-none", "d-lg-flex").
 *
 * Returns `true` if the class was handled and inserted, otherwise `false`.
 */
function transformDisplayClasses(
    cls: any,
    target: Record<string, VuetifyClass>
): boolean {
    if (cls.category !== "display") {return false;}

    const visibilityClasses = [
        "Hidden on all",
        "Hidden only on xs",
        "Hidden only on sm",
        "Hidden only on md",
        "Hidden only on lg",
        "Hidden only on xl",
        "Hidden only on xxl",
        "Visible on all",
        "Visible only on xs",
        "Visible only on sm",
        "Visible only on md",
        "Visible only on lg",
        "Visible only on xl",
        "Visible only on xxl",
    ];

    if (!visibilityClasses.includes(cls.name)) {return false;}

    const classNames = cls.description
        .split(" ")
        .map((c: string) => c.replace(".", "").trim())
        .filter(Boolean);

    for (const className of classNames) {
        if (!target[className]) {
        target[className] = {
            css: "",
            type: "layout",
        };
        }
    }

    return true;
}

// Add scraped utilities / text / spacing
scraped.forEach(cls => {
    if (skipSpacing.includes(cls.name)) {return;}

    // 👇 clean and readable
    if (transformDisplayClasses(cls, vuetifyClasses)) {return;}

    let key = cls.name;
    let cssValue = toCss(cls.name) || cls.description || "";
    let type = categoryMap[cls.category] || "layout";

    vuetifyClasses[key] = { css: cssValue, type };
    });

    // Merge color classes (override if needed)
    Object.entries(colorClasses).forEach(([name, cls]) => {
        vuetifyClasses[name] = cls;
});

// Write as a TypeScript module
const output = `export type VuetifyClass = {
    css: string;
    type: "spacing" | "color" | "layout" | "text";
    color?: string;
};

export const vuetifyClasses: Record<string, VuetifyClass> = ${JSON.stringify(vuetifyClasses, null, 2)};
`;

const outputDir = "../data";
const outputFile = `${outputDir}/vuetify-classes.ts`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, output);
console.log(`✅ Saved to ${outputFile}`);

console.log(
    `✅ Generated vuetify-classes.ts with ${Object.keys(vuetifyClasses).length} classes`,
);
