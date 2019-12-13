"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var schema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    done: Boolean
});
var addTodo = mongoose_1.default.model("todos", schema);
exports.default = addTodo;
