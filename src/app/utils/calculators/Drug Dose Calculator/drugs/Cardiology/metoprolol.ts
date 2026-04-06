import { Drug } from "../../../types";

export const metoprolol:Drug = {
    id:"metoprolol",
    name:"Metoprolol",
    adult_dosing:1.5,
    max_dose:"200mg",
    isWeightBased:true,
    unit:"mg",
    pediatric_dosing:0.5,
    cld_dosing:[
        {
            stage:"B",
            to_be_given:true,
            dosing:0.5
        },
        {
            stage:"C",
            to_be_given:true,
            dosing:0.25
        }
    ]
}