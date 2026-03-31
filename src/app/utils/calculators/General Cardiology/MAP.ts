import { Calculator, Input, Interpretation, Values } from "../types";

const parameters : Input[] = [
    {
        id:"sbp",
        name:"Systolic Blood Pressure",
        placeholder:"Enter the Systolic Blood Pressure in mmHg",
        type:"number",
        required:true,
        min:0
    },
    {
        id:"dbp",
        name:"Diastolic Blood Pressure",
        placeholder:"Enter the Disatolic Blood Pressure in mmHg",
        type:"number",
        required:true,
        min:0
    }
]

export const MAP : Calculator = {
    id:"map",
    name:"Mean Arterial Pressure",
    desc:"Mean Arterial Pressure (MAP) is the average arterial pressure throughout one cardiac cycle, that is, systole and diastole. It is influenced by Cardiac Output (CO) and Systemic Vascular Resistance (SVR) and used to check whether the vital organs of the body are well-perfused or not.",
    inputs:parameters,
    calc_func:(values:Values):number => {
        const sbp = values.sbp as number;
        const dbp = values.dbp as number;
        const pp = sbp - dbp;
        const map = dbp + (pp/3);
        return Math.floor(map);
    },
    interpret_func:(map : number):Interpretation => {
        if(map < 60){
            return {
                level:"severe",
                message:"Vital organs are poorly perfused"
            }
        }else if(map >= 60 && map < 65){
            return{
                level:"moderate",
                message:"Vital organs are borderline perfused"
            }
        }else if(map >= 65 && map < 70){
            return{
                level:"moderate",
                message:"Vital organs are adequately perfused",
                
            }
        }else if(map >= 70 && map < 100){
            return{
                level:'none',
                message:"Vital organs are well perfused"
            }
        }else{
            return{
                level:"severe",
                message:"Vital organs are hyper perfused",
                diagnosis:"Possibly due to hypertension"
            }
        }
    }
}