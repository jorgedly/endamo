"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PruebaController {
    prueba(req, res) {
        database_1.default.query('DESCRIBE');
        res.json('prueba');
        res.send('Prueba');
    }
}
const pruebaController = new PruebaController();
exports.default = pruebaController;
