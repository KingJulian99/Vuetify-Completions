"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const vuetifyClasses = {
    "ga-0": { css: "gap: 0;", type: "spacing" },
    "ga-1": { css: "gap: 4px;", type: "spacing" },
    "ga-2": { css: "gap: 8px;", type: "spacing" },
    "ga-3": { css: "gap: 12px;", type: "spacing" },
    "text-display-large": {
        css: "font-size: 57px; font-weight: 500; line-height: 64px; letter-spacing: -0.25px;",
        type: "text",
    },
    "text-display-medium": {
        css: "font-size: 45px; font-weight: 500; line-height: 52px; letter-spacing: 0px;",
        type: "text",
    },
    "text-display-small": {
        css: "font-size: 36px; font-weight: 500; line-height: 44px; letter-spacing: 0px;",
        type: "text",
    },
};
function activate(context) {
    // The completions provider provides a list of code completion suggestions.
    const completionsProvider = vscode.languages.registerCompletionItemProvider(["vue", "html"], {
        provideCompletionItems(document, position) {
            const line = document.lineAt(position).text;
            // Simple check: only trigger inside class or :class
            if (!isInsideClassAttribute(line, position.character)) {
                return undefined;
            }
            return Object.entries(vuetifyClasses).map(([key, value]) => createItem(key, value));
        },
    });
    context.subscriptions.push(completionsProvider);
    // The suggestion list trigger automatically shows the suggestion list under certain conditions.
    const suggestionListTrigger = vscode.workspace.onDidChangeTextDocument((event) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || event.document !== editor.document)
            return;
        const position = editor.selection.active;
        const line = editor.document.lineAt(position).text;
        if (isInsideClassAttribute(line, position.character)) {
            vscode.commands.executeCommand("editor.action.triggerSuggest");
        }
    });
    context.subscriptions.push(suggestionListTrigger);
    // The hover provider shows an information window about the Vuetify class that is being hovered over.
    const hoverProvider = vscode.languages.registerHoverProvider(["vue", "html"], {
        provideHover(document, position) {
            const range = document.getWordRangeAtPosition(position, /[\w-]+/);
            if (!range)
                return;
            const word = document.getText(range);
            const css = vuetifyClasses[word];
            if (!css)
                return;
            return new vscode.Hover(new vscode.MarkdownString(`\`\`\`css\n${css}\n\`\`\``));
        },
    });
    context.subscriptions.push(hoverProvider);
}
// Helpers
function isInsideClassAttribute(line, cursor) {
    const beforeCursor = line.slice(0, cursor);
    return (beforeCursor.includes('class="') || beforeCursor.includes(':class="'));
}
function createItem(label, classInfo) {
    const completionLabel = {
        label: label,
        description: "Vuetify utility class",
    };
    const item = new vscode.CompletionItem(completionLabel, vscode.CompletionItemKind.Constant);
    item.insertText = label;
    if (classInfo.css !== undefined && classInfo.css.trim().length !== 0) {
        item.detail = classInfo.css;
    }
    return item;
}
// This method is called when your extension is deactivated
function deactivate() { }
//# sourceMappingURL=extension.js.map