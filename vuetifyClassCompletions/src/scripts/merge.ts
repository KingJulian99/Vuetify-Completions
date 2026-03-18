import fs from "fs";
import { toCss } from "../utils/toCss";

type VuetifyClass = {
    css: string;
    type: "spacing" | "color" | "layout" | "text";
    color?: string;
};

// Load scraped JSON
const scraped: any[] = JSON.parse(
     fs.readFileSync("vuetify-docs-classes.json", "utf-8"),
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

// Add scraped utilities / text / spacing
scraped.forEach((cls) => {
    const cssValue = toCss(cls.name) || cls.description || "";
    const type = categoryMap[cls.category] || "layout";
    vuetifyClasses[cls.name] = { css: cssValue, type };
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

fs.writeFileSync("vuetify-classes.ts", output);

console.log(
     `✅ Generated vuetify-classes.ts with ${Object.keys(vuetifyClasses).length} classes`,
);
