import { Metadata } from "next";
import RenderCalculator from "./renderCalc";
import { CalculatorRegistry } from "@/app/utils/calculators/registry";
export async function generateMetadata({params} : {params:Promise<{section:string, id:string}>}):Promise<Metadata>{
    const calcData : {section:string, id:string} = await params;
    const calculator = CalculatorRegistry[calcData.section].calculators.find(e => e.id === calcData.id);
    return {
        title:`${calculator?.name} calculator`,
        description:`A ${calculator?.name} calculator to evaluate the patient as accurately as possible`
    };
}
export default async function Calculator({params} : {params:Promise<{section:string, id:string}>}){
    const calcData : {section:string, id:string} = await params;
    return(
        <RenderCalculator key={calcData.id} section={calcData.section} id={calcData.id}/>
    );
}