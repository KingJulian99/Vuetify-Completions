"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const completion_1 = require("./providers/completion");
const hover_1 = require("./providers/hover");
const listTrigger_1 = require("./providers/listTrigger");
function activate(context) {
    context.subscriptions.push(completion_1.completionsProvider);
    context.subscriptions.push(listTrigger_1.suggestionListTrigger);
    context.subscriptions.push(hover_1.hoverProvider);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map