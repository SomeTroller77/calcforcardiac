import { Drug } from "../../../types";

export const Atorvastatin:Drug = {
    id:"atorvastatin",
    name:"Atorvastatin",
    adult_dosing:"10mg to 20mg",
    pediatric_dosing:"10mg to 20mg",
    isWeightBased:false,
    max_dose:"80mg",
    max_dose_pediatric:"20mg",
    unit:"mg",
    cld_dosing:[
        {
            stage:"B",
            to_be_given:true,
            dosing:"5-10mg OD",
            max_dose:"20mg"
        },
        {
            stage:"C",
            to_be_given:false,
            dosing:0,
            max_dose:0
        }
    ]
};