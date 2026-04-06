import { Calculator, Drug, Input, Interpretation, Values, inputOptions } from "../types"
import { DrugRegistry } from "./drugs/drug_registry"

function generateDrugList():inputOptions[] {
    const drugs:inputOptions[] = DrugRegistry.map(e => {
        console.log(e.name);
        const drug:inputOptions = {
            label:e.name,
            value:e.id
        }
        return drug;
    });
    console.log(drugs);
    return drugs;
}
const parameters:Input[] = [
    {
        id:"drug",
        name:"Drug name",
        placeholder:"Select the drug by searching its name below",
        type:"search",
        inputOptions:generateDrugList()
    },
    {
        id:"weight",
        name:"Weight",
        placeholder:"Enter the weight of the patient",
        type:"number"
    },
    {
        id:"ckd",
        name:"CKD Stage",
        placeholder:"Whether the patient has CKD, if yes, select the stage",
        type:"select",
        inputOptions:[
            {
                label:"None",
                value:"none"
            },
            {
                label:"CKD stage 3a",
                value:"3A"
            },
            {
                label:"CKD Stage 3B",
                value:"3B"
            },
            {
                label:"CKD Stage 4",
                value:"4"
            },
            {
                label:"CKD Stage 5 / ESRD",
                value:"5"
            }
        ]
    },
    {
        id:"cld",
        name:"CLD Stage (Child Pugh)",
        placeholder:"Whether the patient has CLD, if yes, select the Child Pugh Stage",
        type:"select",
        inputOptions:[
            {
                label:"None",
                value:"none"
            },
            {
                label:"Child Pugh A",
                value:"A"
            },
            {
                label:"Child Pugh B",
                value:"B"
            },
            {
                label:"Child Pugh C",
                value:"C"
            }
        ]
    }
]

export const Adult_Drug_Calculator:Calculator = {
    id:"adult_drug_calculator",
    name:"Adult Dose Calculator",
    desc:"Adult Dose Calculator can be used to calculate the drug dosing of different dose which also accounts for different comorbidities like CKD and CLD",
    inputs:parameters,
    calc_func:(values : Values) : string | number => {
        const drugID = values.drug as string;
        const weight = values.weight as number;
        const ckd = values.ckd as "none" | "3A" | "3B" | "4" | "5";
        const cld = values.cld as "none" | "A" | "B" | "C";
        const drug = DrugRegistry.find(e => e.id === drugID);
        if(drug){
            if(typeof drug.cld_dosing !== "undefined" && typeof drug.ckd_dosing !== "undefined" && ckd !== "none" && cld == "none"){
                const dosingObj = drug.cld_dosing.find(e => e.stage === cld);
                if(drug.isWeightBased){
                    return `${Math.floor(dosingObj!.dosing * weight)} ${drug.unit}`;
                }else{
                    return `${Math.floor(dosingObj!.dosing)} ${drug.unit}` || 0;
                }
            }else if(typeof drug.cld_dosing !== "undefined" && cld !== "none"){
                const dosingObj = drug.cld_dosing.find(e => e.stage === cld);
                if(drug.isWeightBased){
                    return `${Math.floor(dosingObj!.dosing * weight)} ${drug.unit}`;
                }else{
                    return `${Math.floor(dosingObj!.dosing)} ${drug.unit}` || 0;
                }
            }else if(typeof drug.ckd_dosing !== "undefined" && ckd !== "none"){
                const dosingObj = drug.ckd_dosing.find(e => e.stage === ckd);
                if(drug.isWeightBased){
                    return `${Math.floor(dosingObj!.dosing * weight)} ${drug.unit}`;
                }else{
                    return `${Math.floor(dosingObj!.dosing)} ${drug.unit}` || 0;
                }
            }else{
                if(drug.isWeightBased){
                    return `${Math.floor(drug!.adult_dosing * weight)} ${drug.unit}`;
                }else{
                    return `${drug.adult_dosing} ${drug.unit}`;
                }
            }
        }else{
            return -1;
        }
    },
    interpret_func:(dosing:number | string):Interpretation => {
        if(dosing === 0){
            return {
                level:"severe",
                message:"Drug is to be avoided in patient"
            }
        }else if(dosing === -1){
            return {
                level:"none",
                message:"Drug not found"
            }
        }else{
            return {
                level:"low",
                message:`Calculated dosing for the drug is ${dosing ? dosing : null}`
            }
        }
    }
}