import { cockcroftGault } from "./miscellaneous/cockcroft-gault-eq";
import { IMPACT } from "./transplantation/IMPACT";
import { Section } from "./types";

export const CalculatorRegistry : Record<string, Section> = {
    transplantation:{
        id:"transplantation",
        displayName:"Transplantation",
        textColor:"#ccc",
        svg:"",
        calculators:[
            IMPACT
        ]
    },
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