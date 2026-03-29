export interface Calculator {
    id:string,
    name:string,
    desc:string,
    unit?:string,
    inputs:Input[],
    calc_func:Function,
    interpret_func:Function
}
interface inputOptions {
    label:string,
    value:string | number | Date;
}
export interface Input{
    id:string,
    type: "number" | "text" | "radio",
    inputOptions?:inputOptions[],
    min?:number,
    max?:number,
    required?:boolean,
    defaultUnit?:string,
    unitOptions?:string[]    
}

export interface Interpretation{
    level?: "none" | "low" | "moderate" | "high" | "severe",
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
