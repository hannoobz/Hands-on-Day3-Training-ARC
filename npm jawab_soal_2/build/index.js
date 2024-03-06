"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const prompt_1 = require("./prompt");
const axios_1 = __importDefault(require("axios"));
const process_1 = require("process");
const getTodoItems = async () => {
    try {
        const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/todos?_limit=3`);
        const todoItems = response.data;
        // console.log(todoItems);
        return todoItems;
    }
    catch (errors) {
        console.error("Error");
    }
};
const result = async () => {
    const res = await getTodoItems();
    console.log(res);
};
const main = async () => {
    (0, console_1.clear)();
    var todo = await getTodoItems();
    while (true) {
        console.log("1. Lihat task");
        console.log("2. Ubah status task");
        console.log("3. Keluar");
        console.log("");
        const inputMenu = await (0, prompt_1.prompt)("Masukkan Pilihan :");
        switch (inputMenu) {
            case '1': {
                (0, console_1.clear)();
                for (let i = 0; i < todo.length; i++) {
                    console.log("Task " + i + " : " + todo[i].title);
                    console.log("completed : " + todo[i].completed);
                    console.log('');
                }
                break;
            }
            case '2': {
                (0, console_1.clear)();
                for (let i = 0; i < todo.length; i++) {
                    console.log("Task " + i + " : " + todo[i].title);
                    console.log("completed : " + todo[i].completed);
                    console.log('');
                }
                const inputCheck = await (0, prompt_1.prompt)("Ubah status :");
                try {
                    todo[inputCheck].completed = !todo[inputCheck].completed;
                }
                catch (_a) {
                }
                break;
            }
            case '3': {
                (0, process_1.exit)();
                break;
            }
            default: {
                break;
            }
        }
    }
};
main();
