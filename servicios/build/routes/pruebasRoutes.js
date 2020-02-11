"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pruebaController_1 = __importDefault(require("../controllers/pruebaController"));
class PruebasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pruebaController_1.default.prueba);
    }
}
const pruebasRoutes = new PruebasRoutes();
exports.default = pruebasRoutes.router;
