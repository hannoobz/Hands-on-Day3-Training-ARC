"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptOrDefault = exports.prompt = void 0;
const readline_1 = require("readline");
const readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
const prompt = (p) => new Promise((r) => readline.question(p, r));
exports.prompt = prompt;
const promptOrDefault = async (p, def) => {
    const inp = await (0, exports.prompt)(p);
    if (inp.length == 0)
        return def;
    return inp;
};
exports.promptOrDefault = promptOrDefault;
