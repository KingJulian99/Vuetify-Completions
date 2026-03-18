import * as vscode from "vscode";
import { completionsProvider } from "./providers/completion";
import { hoverProvider } from "./providers/hover";
import { suggestionListTrigger } from "./providers/listTrigger";

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(completionsProvider);
    context.subscriptions.push(suggestionListTrigger);
    context.subscriptions.push(hoverProvider);
}

// This method is called when your extension is deactivated
export function deactivate() {}
