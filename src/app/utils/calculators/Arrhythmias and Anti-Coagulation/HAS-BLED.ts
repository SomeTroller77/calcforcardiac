import { Input, Calculator, Values, Interpretation } from "../types"

const parameters:Input[] = [
    {
        id:"sbp",
        type:"number",
        name:"Systolic Blood Pressure",
        placeholder:"Enter the Systolic Blood Pressure",
        min:0,
        required:true
    },
    {
        id:"rft",
        type:"checkbox",
        name:"Renal Function",
        placeholder:"Whether the patient has/had abnormal renal function",
        info:"Dialysis, Transplantation or Cr > 2.26 mg/dL"
    },
    {
        id:"lft",
        type:"checkbox",
        name:"Liver Function",
        placeholder:"Whether the patient has abnormal renal function",
        info:"Cirrhosis or Bilirubin >2x normal or AST/ALT/AP > 3x normal",
    },
    {
        id:"stroke",
        type:"checkbox",
        name:"History of stroke",
        placeholder:"Whether the patient has a history of stroke",
    },
    {
        id:"bleeding",
        type:"checkbox",
        name:"History of bleeding",
        placeholder:"Whether the patient has a history of major bleeding or predeposition to Bleeding"
    },
    {
        id:"inr",
        type:"checkbox",
        name:"INR",
        placeholder:"Does the patient have Labile INR (Unstable/high INR)",
        info:"Time in Therapeutic Range < 60%"
    },
    {
        id:"age",
        type:"number",
        placeholder:"Enter the age",
        name:"Age",
        required:true
    },
    {
        id:"alcohol",
        name:"Prior alcohol usage",
        type:"checkbox",
        placeholder:"Whether the patient has a history of alcohol consumption",
        info:">= 8 drinks/week",
        required:true
    },
    {
        id:"drugs",
        name:"Prior drug usage",
        type:"checkbox",
        placeholder:"Whether the patient has a history of drug (Antiplatelet, NSAIDs) usage",
        required:true
    }
]

export const HASBLED : Calculator = {
    id:"hasbled",
    name:"HAS-BLED Score",
    desc:"HAS-BLED is a scoring system developed to assess 1-year risk of major bleeding in people taking anticoagulants for AF (atrial fibrillation). Major bleeding is defined as being intracranial bleedings, hospitalization, hemoglobin decrease > 2 g/dL, and/or transfusion.",
    inputs:parameters,
    calc_func:(values : Values):number => {
        const sbp = values.sbp as number;
        const rft = values.rft as boolean;
        const lft = values.lft as boolean;
        const stroke = values.stroke as boolean;
        const bleeding = values.bleeding as boolean;
        const inr = values.inr as boolean;
        const age = values.age as number;
        const alcohol = values.alcohol as boolean;
        const drugs = values.drug as boolean;
        let score = 0;
        if(sbp > 160) score ++;
        if(rft) score++;
        if(lft) score++;
        if(stroke) score++;
        if(bleeding) score++;
        if(inr) score++;
        if(age > 65) score++;
        if(alcohol) score++;
        if(drugs) score++;
        return score;
    },
    interpret_func:(score:number):Interpretation => {
        if(score <= 1) return {
            level:"low",
            message:"There is a low (1-3.5%) risk of bleeding",
            advice:"Anticoagulations may be considered"
        }
        if(score === 2) return {
            level:"moderate",
            message:"There is a moderate (4%) risk of bleeding",
            advice:"Anticoagulations may be considered"            
        }
        if(score <= 5) return {
            level:"high",
            message:"There is a high (5-9%) risk of bleeding",
            advice:"Consider alternatives to anticoagulation"
        }
        if(score >= 6) return {
            level:"severe",
            message:"There is a very high (10+ %) risk of bleeding",
            advice:"Consider alternatives to anticoagulations"
        }
        return {
            level:"none",
            message:"Invalid value"
        };
    }
}