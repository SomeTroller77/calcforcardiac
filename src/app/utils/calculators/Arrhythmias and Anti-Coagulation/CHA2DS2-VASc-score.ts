import { Calculator, Input, Interpretation, Values } from "../types";

const parameters:Input[] = [
    {
        id:"chf",
        name:"CHF/LV dysfunction",
        type:"checkbox",
        placeholder:"Whether the patient has CHF or LV dysfunction",
        required:true
    },
    {
        id:"hypertension",
        name:"Hypertension",
        type:"checkbox",
        placeholder:"Whether the patient has hypertension",
        required:true
    },
    {
        id:"age",
        name:"Age",
        type:"number",
        placeholder:"Enter the age",
        required:true,
        min: 18,
        max: 95
    },
    {
        id:"dm",
        name:"Diabetes Mellitus",
        placeholder:"Whether the patient has diabetes",
        type:"checkbox",
        required:true
    },
    {
        id:"ischemia",
        name:"Prior ischemia",
        placeholder:"Whether the patient had prior ischemic event",
        type:"checkbox",
        required:true
    },
    {
        id:"vd",
        name:"Vascular Disease",
        placeholder:"Whether the patient has any vascular disease",
        info:"Myocardial Infarction, Peripheral Vascular Disease etc.",
        type:"checkbox",
        required:true
    },
    {
        id:"gender",
        name:"Gender",
        placeholder:"Select the gender",
        type:"select",
        required:true,
        inputOptions:[
            {
                label:"Male",
                value:"male"
            },
            {
                label:"Female",
                value:"female"
            }
        ]
    }
];

export const cha2ds2 : Calculator = {
    id:"cha2ds2",
    name:"CHA₂DS₂-VASc Score",
    desc:"CHA₂DS₂-VASc Score is a clinical prediction tool used to estimate the risk of stroke in patients with non-valvular atrial fibrillation (AF).",
    inputs:parameters,
    calc_func:(values : Values):number => {
        const chf = values.chf as boolean;
        const hypertension = values.hypertension as boolean;
        const age = values.age as number;
        const dm = values.dm as boolean;
        const ischemia = values.ischemia as boolean;
        const vd = values.vd as boolean;
        const gender = values.gender as "male" | "female";
        var score = 0;
        if(chf) score++;
        if(hypertension) score++
        if(age >= 75) score = score + 2;
        if(dm) score++;
        if(ischemia) score = score + 2;
        if(vd) score ++;
        if(age >= 65 && age < 75) score++;
        if(gender === "female") score++;
        return score;
    },
    interpret_func:(score : number):Interpretation => {
        if(score === 0){
            return {
                level:"low",
                message:"The stroke risk % for the patient is 0.2%"
            }
        }
        if(score === 1){
            return {
                level:"low",
                message:"The stroke risk % for the patient is 0.6%"
            }
        }
        if(score === 2){
            return {
                level:"low",
                message:"The stroke risk % for the patient is 2.2%"
            }
        }
        if(score === 3){
            return {
                level:"low",
                message:"The stroke risk % for the patient is 3.2%"
            }
        }
        if(score === 4){
            return {
                level:"moderate",
                message:"The stroke risk % for the patient is 4.8%"
            }
        }
        if(score === 5){
            return {
                level:"moderate",
                message:"The stroke risk % for the patient is 7.2%"
            }
        }
        if(score === 6){
            return {
                level:"moderate",
                message:"The stroke risk % for the patient is 9.7%"
            }
        }
        if(score === 7){
            return {
                level:"high",
                message:"The stroke risk % for the patient is 11.2%"
            }
        }
        if(score === 8){
            return {
                level:"high",
                message:"The stroke risk % for the patient is 10.8%"
            }
        }
        if(score === 9){
            return {
                level:"severe",
                message:"The stroke risk % for the patient is 12.2"
            }
        }
        return {
            level:"none",
            message:"invalid values"
        }
    }
}