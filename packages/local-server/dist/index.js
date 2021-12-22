"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const express_1 = __importDefault(require("express"));
const serve = (filename, directory, port) => {
    const server = (0, express_1.default)();
    return new Promise((resolve, reject) => {
        server.listen(port, resolve).on('error', reject);
    });
};
exports.serve = serve;
