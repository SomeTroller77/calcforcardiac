import { Calculator, Input, Interpretation, Values } from "../types";
import { MELD } from "./MELD";
const parameters : Input[] = [
    {
        id:"sbilirubin",
        type:"number",
        name:"Serum (Total) Bilirubin",
        defaultUnit:"mg/dL",
        placeholder:"Enter serum bilirubin levels in mg/dL",
        required:true,
        min:0,
    },
    {
        id:"screatinine",
        type:"number",
        name:"Serum Creatinine",
        defaultUnit:"mg/dL",
        placeholder:"Enter Serum Creatinine levels in mg/dL",
        required:true,
        min:0.2
    },
    {
        id:'inr',
        name:"International Normalized Ratio",
        type:'number',
        placeholder:"Enter INR values",
        required:true,
        min:0
    },
    {
        id:"na",
        name:"Sodium levels",
        type:"number",
        placeholder:"Enter the sodium value",
        required:true,
        min:127,
        max:137,
        defaultUnit:"mmol/L"
    }
];

export const MELDNa:Calculator = {
    id:"meldna-score",
    name:"Model For End-stage Liver Disease sodium (MELD-Na) score",
    desc:"MELD-Na (Model for End-stage Liver Disease sodium) score is a numerical scale ranging from 6 to 40 that estimates the 3-month mortality risk for patients with CLD (Chronic Liver Disease) which also takes in account of sodium levels",
    inputs:parameters,
    calc_func:(values : Values):number => {
        const meldscore:number = MELD.calc_func(values);
        const na = values.na as number;
        const score:number = meldscore
                    + 1.32 
                    * (137 - na)
                    + (0.033 * meldscore * (137 - na));
        return Math.floor(score);
    },
    interpret_func:(score : number):Interpretation => {
        if(score <= 9){
            return {
                level:"none",
                message:"The mortality prediction percent for the patient is 1.9%",
                advice:"Patient is a great candidate for TIPS procedure"
            }
        }else if(score >= 10 && score < 20){
            if(score < 14){
                return{
                    level:"low",
                    message:"The mortality risk percent for the patient is less than 6.0%",
                    advice:"Patient is a great candidate for TIPS procedure"
                };
            }
            return{
                level:"low",
                message:"The mortality risk percent for the patient is from 6.0% to 19.6%",
            };
        }else if (score >=20 && score < 30){
            return {
                level:"moderate",
                message:"The mortality risk percent for the patient is from 19.6% to 52.6%"
            };
        }else if(score >= 30 && score < 40){
            return {
                level:"high",
                message:"The mortality risk percent for the patient is from 52.6% to 71.3%"
            }
        }else{
            return {
                level:"severe",
                message:"The mortality risk percent for the patient is more than 71.3%"
            }
        }
    }
} 