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
interface inputOptions {
    label:string,
    value:string | number ;
}
export interface Input{
    id:string,
    name:string,
    placeholder:string,
    type: "number" | "text" | "select",
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

export type Values = Record<string, string | number >;
