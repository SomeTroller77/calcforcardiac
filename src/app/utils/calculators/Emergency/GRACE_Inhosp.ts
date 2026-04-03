import { Calculator, Input, Interpretation, Values } from "../types";

const parameters:Input[] = [
    {
        id:"age",
        name:"Age",
        placeholder:"Enter the age",
        type:"number",
        required:true
    },
    {
        id:"hr",
        name:"Heart Rate",
        placeholder:"Enter the Heart Rate",
        type:"number",
        required:true,
        defaultUnit:"beats/minute"
    },
    {
        id:"sbp",
        name:"Systolic Blood Pressure",
        placeholder:"Enter the Systolic Blood Pressure",
        type:"number",
        required:true,
        defaultUnit:"mmHg"
    },
    {
        id:"cret",
        name:"Serum Creatinine",
        placeholder:"Enter the serum creatinine",
        type:"number",
        required:true,
        defaultUnit:"mg/dL"
    },
    {
        id:"killip",
        name:"Killip Class",
        type:"select",
        placeholder:"Select the killip class",
        required:true,
        inputOptions:[
            {
                label:"Class I",
                value:"I"
            },
            {
                label:"Class II",
                value:"II"
            },
            {
                label:"Class III",
                value:"III"
            },
            {
                label:"Class IV",
                value:"IV"
            }
        ]
    },
    {
        id:"cardiacarrest",
        name:"Cardiac Arrest",
        placeholder:"Whether the patient was in cardiac arrest at the time of admission",
        type:"checkbox",
        required:true
    },
    {
        id:"cardiacmarkers",
        name:"Elevated Cardiac Markers",
        placeholder:"Whether the patient had elevated cardiac markers",
        type:"checkbox",
        required:true
    },
    {
        id:"deviation",
        name:"ST segment deviation",
        placeholder:"Whether the patient had ST segment deviation",
        type:"checkbox",
        required:true
    }
]

export const GRACE_Inhosp : Calculator = {
    id:"grace_inhosp",
    name:"GRACE 1.0 (In-Hospital)",
    desc:"The GRACE (Global Registry for Acut Coronary Events) Score is a clinical tool to estimate the risk of death or myocardial infarction (MI) during In-Hospital Admission in patients who have suffered Acute Coronary Syndrone (ACS)",
    inputs:parameters,
    calc_func:(values: Values):number => {
        const age = values.age as number;
        const hr = values.hr as number;
        const sbp = values.sbp as number;
        const cret = values.cret as number;
        const killip = values.killip as "I" | "II" | "III" | "IV";
        const cardiacarrest = values.cardiacarrest as boolean;
        const cardiacmarkers = values.cardiacmarkers as boolean;
        const deviation = values.deviation as boolean;
        var score = 0;

        if(age >= 30 && age < 40) score = score + 8;
        else if(age >=40 && age < 50) score = score + 25;
        else if(age >= 50 && age < 60) score = score + 41;
        else if(age >= 60 && age < 70) score = score + 58;
        else if(age >= 70 && age < 80) score = score + 75
        else if(age >= 80 && age < 90) score = score + 91;
        else score = score + 100;

        if (hr < 50) score += 0;
        else if (hr <= 69) score += 3;
        else if (hr <= 89) score += 9;
        else if (hr <= 109) score += 15;
        else if (hr <= 149) score += 24;
        else if (hr <= 199) score += 38;
        else score += 46;

        if (sbp < 80) score += 58;
        else if (sbp <= 99) score += 53;
        else if (sbp <= 119) score += 43;
        else if (sbp <= 139) score += 34;
        else if (sbp <= 159) score += 24;
        else if (sbp <= 199) score += 10;
        else score += 0;

        if (cret <= 0.39) score += 1;
        else if (cret <= 0.79) score += 4;
        else if (cret <= 1.19) score += 7;
        else if (cret <= 1.59) score += 10;
        else if (cret <= 1.99) score += 13;
        else if (cret <= 3.99) score += 21;
        else score += 28;

        if (killip === "I") score += 0;
        else if (killip === "II") score += 20;
        else if (killip === "III") score += 39;
        else if (killip === "IV") score += 59;

        if (cardiacarrest) score += 39;

        if (cardiacmarkers) score += 14;

        if (deviation) score += 28;
        return score;
    },
    interpret_func:(score : number) : Interpretation => {
        if(score <= 60) return {
            level:"low",
            message:"Probability of In Hospital Mortality is less than or equal to 0.2%"
        }
        if(score <= 70 ) return {
            level:"low",
            message:"Probability of In Hospital Mortality is less than or equal to 0.3%"
        }
        if(score <= 80 ) return {
            level:"low",
            message:"Probability of In Hospital Mortality is less than or equal to 0.4%"
        }
        if(score <= 90 ) return {
            level:"low",
            message:"Probability of In Hospital Mortality is less than or equal to 0.6%"
        }
        if(score <= 100 ) return {
            level:"low",
            message:"Probability of In Hospital Mortality is less than or equal to 0.8%"
        }
        if(score <= 110 ) return {
            level:"low",
            message:"Probability of In Hospital Mortality is less than or equal to 1.1%"
        }
        if(score <= 120 ) return {
            level:"low",
            message:"Probability of In Hospital Mortality is less than or equal to 1.6%"
        }
        if(score <= 130 ) return {
            level:"low",
            message:"Probability of In Hospital Mortality is less than or equal to 2.1%"
        }
        if(score <= 140 ) return {
            level:"low",
            message:"Probability of In Hospital Mortality is less than or equal to 2.9%"
        }
        if(score <= 150 ) return {
            level:"moderate",
            message:"Probability of In Hospital Mortality is less than or equal to 3.9%"
        }
        if(score <= 160 ) return {
            level:"moderate",
            message:"Probability of In Hospital Mortality is less than or equal to 5.4%"
        }
        if(score <= 170 ) return {
            level:"moderate",
            message:"Probability of In Hospital Mortality is less than or equal to 7.3%"
        }
        if(score <= 180 ) return {
            level:"severe",
            message:"Probability of In Hospital Mortality is less than or equal to 9.8%"
        }
        if(score <= 190 ) return {
            level:"severe",
            message:"Probability of In Hospital Mortality is less than or equal to 13%"
        }
        if(score <= 200 ) return {
            level:"severe",
            message:"Probability of In Hospital Mortality is less than or equal to 18%"
        }
        if(score <= 210 ) return {
            level:"severe",
            message:"Probability of In Hospital Mortality is less than or equal to 23%"
        }
        if(score <= 220 ) return {
            level:"severe",
            message:"Probability of In Hospital Mortality is less than or equal to 29%"
        }
        if(score <= 230 ) return {
            level:"severe",
            message:"Probability of In Hospital Mortality is less than or equal to 36%"
        }
        if(score <= 240 ) return {
            level:"severe",
            message:"Probability of In Hospital Mortality is less than or equal to 44%"
        }
        if(score < 250 ) return {
            level:"severe",
            message:"Probability of In Hospital Mortality is less than or equal to 44%"
        }
        if(score >= 250) return {
            level:"severe",
            message:"Probability of In Hospital Mortality is more than or equal to 52%"
        }
        return{
            level:"none",
            message:"Invalid Value"
        }
    }
}