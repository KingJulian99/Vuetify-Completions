import * as vscode from "vscode";
import { type VuetifyClass } from "../types";
import { vuetifyClasses } from "../data/vuetify-classes";
import { isInsideClassAttribute } from "../utils/helpers";

// The completions provider provides a list of code completion suggestions.
export const completionsProvider =
    vscode.languages.registerCompletionItemProvider(["vue", "html"], {
        provideCompletionItems(document, position) {
            const line = document.lineAt(position).text;

            // Simple check: only trigger inside class or :class
            if (!isInsideClassAttribute(line, position.character)) {
                return undefined;
            }

            return Object.entries(vuetifyClasses).map(([key, value]) =>
                createItem(key, value),
            );
        },
    });

function createItem(
    label: string,
    classInfo: VuetifyClass,
): vscode.CompletionItem {
    const completionLabel: vscode.CompletionItemLabel = {
        label: label,
        description: "Vuetify utility class",
    };

    const item = new vscode.CompletionItem(
        completionLabel,
        vscode.CompletionItemKind.Constant,
    );

    item.insertText = label;
    if (classInfo.css !== undefined && classInfo.css.trim().length !== 0) {
        item.detail = classInfo.css;
    }

    return item;
}
