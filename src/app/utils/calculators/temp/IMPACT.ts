import { Calculator, Input, Interpretation, Values } from "../types";

const parameters : Input[] = [
    {
        id:"age",
        name:"Age",
        placeholder:"Enter age",
        type:"number",
        min:0,
        required:true,
    },
    {
        id:"sbilirubin",
        name:"Serum Bilirubin",
        placeholder:"Enter the serum bilirubin value in mg/dL",
        type:"number",
        defaultUnit:"mg/dL",
        required:true
    },
    {
        id:"crcl",
        name:"Creatinine Clearance (CrCl)",
        placeholder:"Enter the CrCl value in mL/min",
        type:"number",
        defaultUnit:"mL/min",
        required:true
    },
    {
        id:"dialysisStatus",
        name:"Dialysis Requirement",
        placeholder:"Whether Dialysis was done between listing and transplantation",
        type:"checkbox",
        required:true
    },
    {
        id:"gender",
        name:"Gender",
        placeholder:"Select Gender",
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
    },
    {
        id:"causeOfHF",
        name:"Heart Failure Etiology",
        placeholder:"Cause of Heart Failure",
        type:"select",
        required:true,
        inputOptions:[
            {
                label:"Idiopathic",
                value:"idiopathic"
            },
            {
                label:"Ischemic",
                value:"ischemic"
            },
            {
                label:"Congenital",
                value:"congenital"
            },
            {
                label:"Other",
                value:"other"
            }
        ]
    },
    {
        id:"recentInfection",
        name:"Recent Infection Status",
        placeholder:"Whether the patient had a recent infection",
        type:"checkbox"
    },
    {
        id:"aorticBalloonPump",
        name:"Intra-Aortic Balloon Pump",
        placeholder:"Whether Intra-Aortic Balloon Pump was implanted",
        type:"checkbox"
    },
    {
        id:"preTransplantMechVent",
        name:"Mechanical Ventilation",
        placeholder:"whether Mechanical Ventilation was done pre-transplant",
        type:"checkbox"
    },
    {
        id:"race",
        name:"Race",
        placeholder:"Select the Race of the patient",
        type:"select",
        required:true,
        inputOptions:[
            {
                label:"Caucasian",
                value:"caucasian"
            },
            {
                label:"African American",
                value:"african-american"
            },
            {
                label:"Hispanic",
                value:"hispanic"
            },
            {
                label:"Other",
                value:"other"
            }
        ]
    },
    {
        id:"tempCircSupp",
        name:"Temporary Circulation Support",
        placeholder:"Whether temporary circulation support was needed (includes ECMO and e-VADs)",
        type:"checkbox"
    },
    {
        id:"VAD",
        name:"Ventricular Assist Device",
        placeholder:"Select the Ventricular Assist Device used",
        type:"select",
        required:true,
        inputOptions:[
            {
                label:"None used",
                value:"none"
            },
            {
                label:"Older-Generation Pulsatile",
                value:"older-generation"
            },
            {
                label:"Newer-Generation continuous",
                value:"newer-generation"
            },
            {
                label:"HeartMate II",
                value:"heartmateii"
            }
        ]
    }
]

export const IMPACT:Calculator = {
    id:"impact-score",
    name:"IMPACT (Index for Mortality Prediction After Cardiac Transplantation)",
    desc:"IMPACT score is a risk assessment tool used to predict 1-year mortality risk following a Heart Transplantation based on 12 parameters (including renal function, liver function, age)",
    inputs:parameters,
    calc_func:(values : Values):number => {
        const age = values.age as number;
        const sbilirubin = values.sbilirubin as number;
        const crcl = values.crcl as number;
        const dialysisStatus = values.dialysisStatus as boolean;
        const gender = values.gender as "male" | "female";
        const causeOfHF = values.causeOfHF as "idiopathic" | "ischemic" | "congenital" | "others";
        const recentInfection = values.recentInfection as boolean;
        const aorticBalloonPump = values.aorticBalloonPump as boolean;
        const preTransplantMechVent = values.preTransplantMechVent as boolean;
        const race = values.race as "caucasian" | "african-american" | "hispanic" | "other";
        const tempCircSupp = values.tempCircSupp as boolean;
        const VAD = values.VAD as "none" | "older-generation" | "newer-generation" | "heartmateii";
        var score = 0;
        console.log(preTransplantMechVent);
        if(age > 60){
            score += 3;
        }
        if(sbilirubin > 0 && sbilirubin < 1){
            score += 0;
        }else if(sbilirubin >= 1 && sbilirubin < 2){
            score += 1;
        }else if(sbilirubin >= 2 && sbilirubin < 4){
            score += 3;
        }else{
            score += 4;
        }
        if(crcl >= 50){
            score += 0;
        }else if(crcl < 50 && crcl > 30){
            score += 2;
        }else{
            score += 5;
        }
        if(dialysisStatus){
            score += 4;
        }
        if(gender === "female"){
            score += 3;
        }
        if(causeOfHF === "idiopathic"){
            score += 0;
        }else if(causeOfHF === "ischemic"){
            score += 2;
        }else if(causeOfHF === "congenital"){
            score += 5;
        }else{
            score += 1;
        }
        if(recentInfection){
            score += 3;
        }
        if(aorticBalloonPump){
            score += 3;
        }
        if(preTransplantMechVent){
            score += 5;
        }
        if(race === "caucasian" || race === "other" || race === "hispanic"){
            score += 0;
        }else{
            score += 3;
        }
        if(tempCircSupp){
            console.log("ran temp")
            score += 7;
        }
        if(VAD === "none" || VAD === "heartmateii"){
            score += 0;
        }else if(VAD === "older-generation"){
            score += 3;
        }else{
            score += 5;
        }
        return score;
    },
    interpret_func:(score : number):Interpretation => {
        if(score >= 0 && score < 5){
            return {
                level:"none",
                message:"The rate of mortality for the patient is really low"
            }
        }else if(score >= 5 && score < 10){
            return {
                level:"low",
                message:"The rate of mortality for the patient is low"
            }
        }else if(score >= 10 && score < 15){
            return {
                level:"moderate",
                message:"The rate of mortality for the patient is moderate"
            }
        }else if(score >= 15 && score < 20){
            return {
                level:"high",
                message:"The rate of mortality for the patient is high"
            }
        }else{
            return {
                level:"severe",
                message:"The rate of mortality for the patient is severe"
            }
        }
    }
}