"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PruebasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Hello_Prueba'));
    }
}
const pruebasRoutes = new PruebasRoutes();
exports.default = pruebasRoutes.router;
