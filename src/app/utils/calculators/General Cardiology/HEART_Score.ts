import { Calculator, Input, Interpretation, Values } from "../types";

const parameters : Input[] = [
    {
        id:"history",
        name:"History",
        placeholder:"Select the suspicion level based on history",
        type:"select",
        inputOptions:[
            {
                label:"Highly suspicious",
                value:"high"
            },
            {
                label:"Moderately suspicious",
                value:"moderate",
            },
            {
                label:"Slightly suspicious",
                value:"none"
            }
        ],
        required:true
    },
    {
        id:"ecg",
        name:"ECG Interpretation",
        placeholder:"Select the interpretation of ECG",
        type:"select",
        inputOptions:[
            {
                label:"Significant ST-Depression",
                value:"stdepression"
            },
            {
                label:"Nonspecific Repolarization",
                value:"repolarization"
            },
            {
                label:"Normal",
                value:"normal"
            }
        ],
        required:true
    },
    {
        id:"age",
        name:"Age",
        type:"number",
        placeholder:"Enter the age",
        required:true
    },
    {
        id:"risk",
        name:"Risk factors",
        type:"select",
        placeholder:"Select the number of risk factors found",
        inputOptions:[
            {
                label:"3 or more than 3 Risk Factors or history of CAD",
                value:"high"
            },
            {
                label:"1 or 2 Risk Factors",
                value:"moderate"
            },
            {
                label:"No risk factors",
                value:"none"
            }
        ],
        required:true
    },
    {
        id:"trop",
        name:"Troponin Levels",
        placeholder:"Select the amount of Troponin",
        type:"select",
        inputOptions:[
            {
                label:"more than 3 times the normal limit",
                value:"high"
            },
            {
                label:"1 to 3 times the normal limit",
                value:"moderate"
            },
            {
                label:"within normal limits",
                value:"none"
            }
        ]
    }
]

export const HEART_Score : Calculator = {
    id:"heart-score",
    name:"HEART Score",
    desc:"HEART (History, ECG, Age, Risk factors, Troponin) Score is a risk scoring which predicts 6-week risk of major cardiac events in patients with chest pain",
    inputs:parameters,
    calc_func:(values : Values):number => {
        const history = values.history as "high" | "moderate" | "none";
        const ecg = values.ecg as "stdepression" | "repolarization" | "normal";
        const age = values.age as number;
        const risk = values.risk as "high" | "moderate" | "none";
        const trop = values.trop as "high" | "moderate" | "none";
        var score = 0;

        if(history === "high") score = score + 2;
        else if(history === "moderate") score++;

        if(ecg === "stdepression") score = score + 2;
        else if(ecg === "repolarization") score++;

        if(age >= 65) score = score + 2;
        else if(age > 45 && age < 65) score++;

        if(risk === "high") score = score + 2;
        else if(risk === "moderate") score++;

        if(trop === "high") score = score + 2;
        else if(trop === "moderate") score++;
        return score;
    },
    interpret_func:(score:number):Interpretation => {
        if(score >= 0 && score < 4){
            return {
                level:"low",
                message:"There is a chance of 2.5% of Major Adverse Cardiac Event",
                advice:"Discharge home"
            }
        }else if(score >= 4 && score <  7){
            return {
                level:"moderate",
                message:"There is a chance of 20.3% of Major Adverse Cardiac Event",
                advice:"Admit for Clinical Observation"
            }
        }else{
            return {
                level:"severe",
                message:"There is a chance of 72.7% of Major Adverse Cardiac Event",
                advice:"Consider early invasive strategies"
            }
        }
    }
}