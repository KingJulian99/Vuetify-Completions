/**
 * generate-color-hex.ts
 *
 * Generates a JSON file with all Vuetify color hex values.
 * Uses Vuetify's JS color utility instead of scraping or parsing SCSS.
 *
 * Output: src/data/vuetify-color-hex.json
 *
 * Usage:
 *   npx ts-node generate-color-hex.ts
 */

import fs from "fs";
import path from "path";
(async () => {
  const colors = await import("vuetify/lib/util/colors.mjs"); // dynamic import
  console.log(colors);

  // Flatten the colors into a record: { "red-lighten-5": "#FFEBEE", ... }
const colorMap: Record<string, string> = {};

Object.entries(colors).forEach(([name, shades]) => {
  if (typeof shades === "object") {
    Object.entries(shades).forEach(([variant, hex]) => {
      if (typeof hex === "string") {
        const key = variant === "base" ? name : `${name}-${variant}`;
        colorMap[key] = hex;
      }
    });
  }
});

const outputDir = path.join(__dirname, "../data");
fs.mkdirSync(outputDir, { recursive: true });

const outputFile = path.join(outputDir, "vuetify-color-hex.json");
fs.writeFileSync(outputFile, JSON.stringify(colorMap, null, 2));

console.log(`✅ Generated ${Object.keys(colorMap).length} colors at ${outputFile}`);
})();

