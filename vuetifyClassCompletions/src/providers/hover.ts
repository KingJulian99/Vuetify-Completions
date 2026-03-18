import * as vscode from "vscode";
import { vuetifyClasses } from "../data/vuetify-classes";

// The hover provider shows an information window about the Vuetify class that is being hovered over.
export const hoverProvider = vscode.languages.registerHoverProvider(
    ["vue", "html"],
    {
        provideHover(document, position) {
            const range = document.getWordRangeAtPosition(position, /[\w-]+/);
            if (!range) return;

            const word = document.getText(range);

            const css = vuetifyClasses[word].css;
            if (!css) return;

            return new vscode.Hover(
                new vscode.MarkdownString(`\`\`\`css\n${css}\n\`\`\``),
            );
        },
    },
);
