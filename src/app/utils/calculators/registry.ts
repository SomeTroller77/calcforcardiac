import { cockcroftGault } from "./miscellaneous/cockcroft-gault-eq";
import { Section } from "./types";

export const CalculatorRegistry : Record<string, Section> = {
    miscellaneous:{
        id:"miscellaneous",
        displayName:"Miscellaneous",
        textColor:"#ccc",
        svg:"",
        calculators:[
            cockcroftGault
        ]
    }
}