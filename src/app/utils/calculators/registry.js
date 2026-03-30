"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorRegistry = void 0;
var cockcroft_gault_eq_1 = require("./miscellaneous/cockcroft-gault-eq");
exports.CalculatorRegistry = {
    miscellaneous: {
        id: "miscellaneous",
        displayName: "Miscellaneous",
        textColor: "#ccc",
        svg: "",
        calculators: [
            cockcroft_gault_eq_1.cockcroftGault
        ]
    }
};
