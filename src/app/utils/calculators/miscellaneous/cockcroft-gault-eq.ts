import { Calculator, Input, Interpretation, Values } from "../types";

const parameters:Input[] = [
    {
        id:"gender",
        name:"Gender",
        placeholder:"Enter your gender",
        type:"select",
        inputOptions:[
            {
                label:"Male",
                value:"male"
            },
            {
                label:"Female",
                value:"female"
            }
        ],
        required:true
    },
    {
        id:"age",
        type:"number",
        name:"Age",
        placeholder:"Enter your age",
        min:18,
        max:95,
        required:true
    },
    {
        id:"creatinine",
        type:"number",
        name:"Creatinine",
        placeholder:"Enter your serum creatinine values",
        min:0.2,
        max:20,
        required:true
    },
    {
        id:"weight",
        type:"number",
        name:"Weight",
        placeholder:"Enter your weight in kilograms",
        min:10,
        max:100 ,
        required:true
    }
];
function calc_func(values : Values):number{
    const gender = values.gender as "male" | "female";
    const age = values.age as number;
    const weight = values.weight as number;
    const creatinine = values.creatinine as number;
    return gender === "male" 
    ? ((140 - age) * weight)/(72 * creatinine)
    : (((140 - age) * weight)/(72 * creatinine)) * 0.85;
}
function interpret_func(gfr:number):Interpretation{
    if(gfr >= 90){
        return {
            level:"none",
            message:"Glomerular Filtration Rate (GFR) is normal or on the higher side, To be correlated with other clinical clues",
            diagnosis:"CKD Stage 1"
        }
    }else if(gfr < 90 && gfr >= 60){
        return {
            level:"low",
            message:"Glomerular Filtration Rate (GFR) is slightly reduced, To be correlated with other clinical clues",
            diagnosis:"CKD Stage 2"
        }
    }else if(gfr < 60 && gfr >= 45){
        return{
            level:"moderate",
            message:"Glomerular Filtration Rate (GFR) is moderately reduced",
            advice:"Consult a Nephrologist",
            diagnosis:"CKD Stage 3A"
        }
    }else if(gfr < 45 && gfr >= 30){
        return{
            level:"high",
            message:"Glomerular Filtration Rate (GFR) is significantly reduced",
            advice:"Consult a Nephrologist urgently",
            diagnosis:"CKD Stage 3B"
        }
    }else if(gfr < 30 && gfr >= 15){
        return{
            level:"high",
            message:"Glomerular Filtration Rate (GFR) is largely reduced",
            advice:"Consult a Nephrologist urgently",
            diagnosis:"CKD Stage 4"
        }
    }else{
        return{
            level:"severe",
            message:"Glomerular Filtration Rate (GFR) is severely reduced",
            advice:"Consult a Nephrologist urgently to consider dialysis",
            diagnosis:"CKD Stage 5 / ESRD (End Stage Renal Disease)"
        }
    }
}
export const cockcroftGault: Calculator = {
    id:"cockcroft-gault",
    name:"Cockcroft Gault Equation",
    desc:"The CockCroft Gault equation is a formula which is used to find the CrCl (Creatinine Clearance) of an individual on the basis of Age, Weight, Gender and Creatinine",
    unit:"mL/min",
    inputs:parameters,
    calc_func:calc_func,
    interpret_func:interpret_func
}
