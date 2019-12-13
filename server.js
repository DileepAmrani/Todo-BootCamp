"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./build/Config/db"));
var db = db_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("runninnng database");
    // we're connected!
});
var app = express_1.default();
var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("runninnng");
});
app.use(express_1.default.json());
app.use('/todo', require("./build/TODO/todo"));
