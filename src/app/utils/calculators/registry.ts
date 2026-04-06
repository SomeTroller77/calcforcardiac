import { cockcroftGault } from "./Utilities/cockcroft-gault-eq";
import { IMPACT } from "./Transplantation/IMPACT";
import { Section } from "./types";
import { MELD } from "./Utilities/MELD";
import { MAP } from "./General Cardiology/MAP";
import { TIMI } from "./Emergency/TIMI_score";
import { cha2ds2 } from "./Arrhythmias and Anti-Coagulation/CHA2DS2-VASc-score";
import { MELDNa } from "./Utilities/MELDNa";
import { GRACE_Inhosp } from "./Emergency/GRACE_Inhosp";
import { HEART_Score } from "./General Cardiology/HEART_Score";
import { HASBLED } from "./Arrhythmias and Anti-Coagulation/HAS-BLED";
import { GRACE_Discharge } from "./General Cardiology/GRACE_Discharge";
import { Adult_Drug_Calculator } from "./Drug Dose Calculator/Adult";

export const CalculatorRegistry : Record<string, Section> = {
    generalCardiology:{
        id:"generalCardiology",
        displayName:"General Cardiology",
        textColor:"#ccc",
        svg:"",
        calculators:[
            MAP,
            GRACE_Discharge
        ]
    },
    drugDoseCalculator:{
        id:"drugDosing",
        displayName:"Drug Dose Calculator",
        textColor:"#ccc",
        svg:"",
        calculators:[
            Adult_Drug_Calculator
        ]
    },
    arrhythmias:{
        id:"arrhythmias",
        displayName:"Arrhythmias & Anti-Coagulation",
        textColor:"#ccc",
        svg:"",
        calculators:[
            cha2ds2,
            HASBLED
        ]
    },
    emergency:{
        id:"emergency",
        displayName:"Emergency",
        textColor:"#ccc",
        svg:"",
        calculators:[
            TIMI,
            GRACE_Inhosp,
            HEART_Score
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
            MELD,
            MELDNa
        ]
    }
}