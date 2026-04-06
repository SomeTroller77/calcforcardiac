export interface Calculator {
    id:string,
    name:string,
    desc:string,
    unit?:string,
    inputs:Input[],
    calc_func:Function,
    interpret_func:Function,
    customComponent?:React.FC
}
export interface inputOptions {
    label:string,
    value:string | number ;
}
export interface Input{
    id:string,
    name:string,
    placeholder?:string,
    type: "number" | "text" | "select" | "checkbox" | "search",
    inputOptions?:inputOptions[],
    min?:number,
    max?:number,
    required?:boolean,
    defaultUnit?:string,
    unitOptions?:string[],
    info?: string,
    handleDataChange?:Function    
}

export interface Interpretation{
    level: "none" | "low" | "moderate" | "high" | "severe",
    diagnosis?:string,
    message:string,
    advice?:string
}
export interface Section {
    id:string,
    displayName:string,
    textColor:string,
    svg:string,
    calculators:Calculator[]
}
export interface pastUsed  {
    calcInfo : {
        section: string,
        id: string,
        name: string
    },
    value: string | number,
    interpretation: Interpretation,
    formData: object,
    unit: string | undefined
}
export type Values = Record<string, string | number | boolean >;

export interface Drug {
    id:string,
    name:string,
    adult_dosing:number | string,
    pediatric_dosing?:number | string,
    max_dose: number | string,
    max_dose_pediatric?: number | string
    isWeightBased:boolean
    unit:string,
    ckd_dosing?:
        {
            stage: "none" |"3A" | "3B" | "4" | "ESRD",
            to_be_given:boolean
            dosing?:number | string,
            max_dose?:number | string
        }[],
    cld_dosing?: {
        stage:"none" | "A" | "B" | "C",
        to_be_given: boolean,
        dosing?: number | string,
        max_dose?:number | string
    }[]
}

export type Drugs = Drug[];