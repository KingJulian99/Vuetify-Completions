import * as vscode from "vscode";
import { isInsideClassAttribute } from "../utils/helpers";

// The suggestion list trigger automatically shows the suggestion list under certain conditions.
export const suggestionListTrigger = vscode.workspace.onDidChangeTextDocument(
    (event) => {
        const change = event.contentChanges[0];
        if (!change) return;
        // Ignore deletes
        if (change.text.length === 0) return;
        // Ignore completion inserts (usually multiple chars)
        if (change.text.length > 1) return;
        // Ignore empty spaces
        if (change.text === " ") return;

        const editor = vscode.window.activeTextEditor;
        if (!editor || event.document !== editor.document) return;

        const position = editor.selection.active;
        const line = editor.document.lineAt(position).text;

        if (!isInsideClassAttribute(line, position.character)) return;

        const textBeforeCursor = line.slice(0, position.character);

        // Extract content inside class="..."
        const classMatch = textBeforeCursor.match(/class\s*=\s*["']([^"']*)$/);
        if (!classMatch) return;

        vscode.commands.executeCommand("editor.action.triggerSuggest");
    },
);
