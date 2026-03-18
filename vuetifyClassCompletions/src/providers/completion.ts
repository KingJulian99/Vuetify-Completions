import * as vscode from 'vscode';
import classes from '../../data/vuetify-classes.json';

    export const completionProvider = vscode.languages.registerCompletionItemProvider(
    ['vue', 'html'],
    {
        provideCompletionItems() {
        return classes.map(cls => {
            const item = new vscode.CompletionItem(cls.name);
            item.detail = cls.category;
            item.documentation = cls.description;
            return item;
        });
        }
    },
    '-', ':' // trigger characters (optional)
);