// src/providers/hover.ts
import * as vscode from 'vscode';
import classes from '../../data/vuetify-classes.json';

export const hoverProvider = vscode.languages.registerHoverProvider(
    ['vue', 'html'],
    {
        provideHover(document, position) {
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);

        const match = classes.find(c => c.name === word);
        if (!match) return;

        return new vscode.Hover(
            new vscode.MarkdownString(
            `**${match.name}**\n\n\`\`\`css\n${match.css}\n\`\`\`\n${match.description || ''}`
            )
        );
        }
    }
);