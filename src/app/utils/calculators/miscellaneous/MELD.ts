import { Calculator, Input, Interpretation, Values } from "../types";

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
    }
];

export const MELD:Calculator = {
    id:"meld-score",
    name:"Model For End-stage Liver Disease (MELD) score",
    desc:"MELD (Model for End-stage Liver Disease) score is a numerical scale ranging from 6 to 40 that estimates the 3-month mortality risk for patients with CLD (Chronic Liver Disease)",
    inputs:parameters,
    calc_func:(values : Values):number => {
        const sbilirubin = values.sbilirubin as number;
        const screatinine = values.screatinine as number;
        const inr = values.inr as number;
        const score = (9.57 * Math.log(screatinine)) 
                    + (3.78 * Math.log(sbilirubin)) 
                    + (11.2 * Math.log(inr)) 
                    + 6.43;
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