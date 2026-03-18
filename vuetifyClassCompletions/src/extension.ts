// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { completionProvider } from './providers/completion';
import { hoverProvider } from './providers/hover';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    console.log('🎉 Vuetify Class Completions extension is now active!');

    // Register the class autocomplete provider
    context.subscriptions.push(completionProvider);

    // Register the hover provider
    context.subscriptions.push(hoverProvider);

    // Optional: keep helloWorld command for testing if you want
    const disposable = vscode.commands.registerCommand(
        'vuetifyClassCompletions.helloWorld',
        () => {
            vscode.window.showInformationMessage(
                'Hello World from Vuetify Class Completions!'
            );
        }
    );
    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}