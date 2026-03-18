/**
 * Puppeteer-based scraper that collects Vuetify utility class information from the official documentation.
 *
 * Features:
 * 1. Visits Vuetify style pages for borders, display, flex, spacing, typography, elevation, sizing, and position.
 * 2. Extracts class names, descriptions, and categories from HTML tables.
 * 3. Saves the result as a JSON file (`vuetify-docs-classes.json`) for later processing (e.g., by merge.ts).
 *
 * Output format:
 * [
 *   {
 *     name: "m-2",
 *     description: "margin: 8px;",
 *     category: "spacing"
 *   },
 *   {
 *     name: "border-lg",
 *     description: "border-width: 4px;",
 *     category: "borders"
 *   },
 *   ...
 * ]
 *
 * Usage:
 *   1. Run `npx ts-node scrape-docs.ts`
 *
 * Notes:
 * - Requires Puppeteer and Cheerio.
 * - Waits for network idle before scraping each page to ensure tables are fully loaded.
 */

import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import fs from "fs";

const pages = [
    "https://vuetifyjs.com/en/styles/borders/",
    "https://vuetifyjs.com/en/styles/display/",
    "https://vuetifyjs.com/en/styles/flex/",
    "https://vuetifyjs.com/en/styles/spacing/",
    "https://vuetifyjs.com/en/styles/text-and-typography/",
    "https://vuetifyjs.com/en/styles/elevation/",
    "https://vuetifyjs.com/en/styles/sizing/",
    "https://vuetifyjs.com/en/styles/position/",
];

type ClassItem = {
    name: string;
    description?: string;
    category: string;
};

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const results: ClassItem[] = [];

    for (const url of pages) {
        console.log(`Scraping ${url}`);

        await page.goto(url, { waitUntil: "networkidle0" });

        const html = await page.content();
        const $ = cheerio.load(html);

        // Vuetify tables usually contain class lists
        $("table tbody tr").each((_, el) => {
        const cols = $(el).find("td");

        const name = $(cols[0]).text().trim();
        const description = $(cols[1]).text().trim();

        if (name) {
            results.push({
            name,
            description,
            category: url.split("/styles/")[1].replace("/", ""),
            });
        }
        });
    }

    await browser.close();

    const outputDir = "../data";
    const outputFile = `${outputDir}/vuetify-docs-classes.json`;

    // ensure folder exists
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
    console.log(`✅ Saved to ${outputFile}`);
    console.log(`✅ Scraped ${results.length} classes`);
})();
