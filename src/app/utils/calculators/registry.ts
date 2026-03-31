import { cockcroftGault } from "./Utilities/cockcroft-gault-eq";
import { IMPACT } from "./Transplantation/IMPACT";
import { Section } from "./types";
import { MELD } from "./Utilities/MELD";
import { MAP } from "./General Cardiology/MAP";
import { TIMI } from "./Emergency/TIMI_score";

export const CalculatorRegistry : Record<string, Section> = {
    generalCardiology:{
        id:"generalCardiology",
        displayName:"General Cardiology",
        textColor:"#ccc",
        svg:"",
        calculators:[
            MAP
        ]
    },
    emergency:{
        id:"emergency",
        displayName:"Emergency",
        textColor:"#ccc",
        svg:"",
        calculators:[
            TIMI
        ]
    },
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
        id:"utilities",
        displayName:"Utilities",
        textColor:"#ccc",
        svg:"",
        calculators:[
            cockcroftGault,
            MELD
        ]
    }
}