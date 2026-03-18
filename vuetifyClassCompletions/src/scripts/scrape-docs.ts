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

    fs.writeFileSync(
        "vuetify-docs-classes.json",
        JSON.stringify(results, null, 2),
    );

    console.log(`✅ Scraped ${results.length} classes`);
})();
