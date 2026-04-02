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
        id:"isCAD",
        name:"Known Coronary Artery Disease (stenosis >= 50%)",
        placeholder:"Whether the patient has a known CAD with more than 50% stenosis",
        type:"checkbox"
    },
    {
        id:"cadRiskFactors",
        name:"CAD Risk Factors",
        placeholder:"Whether the patient has 3 or more than 3 CAD Risk Factors (Family history of CAD, Hypertension, Hypercholesterolemia, Diabetes, Smoker)",
        type:"checkbox"
    },
    {
        id:"asa",
        name:"ASA use in the last 7 days",
        placeholder:"Whether the patient has taken Aspirin in the last 7 days",
        type:"checkbox"
    },
    {
        id:"angina",
        name:"Severe Angina",
        placeholder:"Whether the patient had severe angina (>= 2 episodes w/in 24 hrs",
        type:"checkbox"
    },
    {
        id:"stchanges",
        name:"ST changes (>= 0.5mm)",
        placeholder:"Whether the patient has ST changes of more than or equal to 0.5mm in EKG",
        type:"checkbox"
    },
    {
        id:"biomarkers",
        name:"Elevated Serum cardiac biomarkers",
        placeholder:"Whether the patient has Elevated Serum cardiac biomarkers (Troponin levels, creatine kinase etc)",
        type:"checkbox"
    }
];

export const TIMI:Calculator = {
    id:"timi-score",
    name:"Thrombolysis in Myocardial Infarction (TIMI) Score",
    desc:"TIMI (Thrombolysis in Myocardial Infarction) Score is a validated, 7-point clinical tool used to predict the 14-day mortality and ischemic events in patients with unstable angina or NSTEMI",
    inputs:parameters,
    calc_func:(values : Values):number => {
        const age = values.age as number;
        const isCAD = values.isCAD as boolean;
        const cad = values.cadRiskFactors as boolean;
        const asa = values.asa as boolean;
        const angina = values.angina as boolean;
        const stchanges = values.stchanges as boolean;
        const biomarkers = values.biomarkers as boolean;
        var score = 0;
        if(age >= 65){
            score++;
        }
        if(isCAD){
            score++;
        }
        if(cad){
            score++;
        }
        if(asa){
            score++;
        }
        if(angina){
            score++;
        }
        if(stchanges){
            score++;
        }
        if(biomarkers){
            score++;
        }
        return score;
    },
    interpret_func:(score : number):Interpretation => {
        if(score === 0 || score === 1){
            return {
                level:"none",
                message:"Patient is at 5% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization."
            }
        }else if(score === 2){
            return {
                level:"low",
                message:"Patient is at 8% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization."
            }
        }else if(score === 3){
            return{
                level:"moderate",
                message:"Patient is at 13% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization."
            }
        }else if(score === 4){
            return{
                level:"moderate",
                message:"Patient is at 20% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization."
            }
        }else if(score === 5){
            return{
                level:"moderate",
                message:"Patient is at 26% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization."
            }
        }else{
            return{
                level:"severe",
                message:"Patient is at 41% risk at 14 days of: all-cause mortality, new or recurrent MI, or severe recurrent ischemia requiring urgent revascularization."
            }
        }
    }
};