import { CalculatorRegistry } from "../registry";
const calculator = CalculatorRegistry.miscellaneous.calculators[0].calc_func;
console.log(calculator(
    {
        gender:"male",
        age:43,
        creatinine:5,
        weight:60
    }
));