import RenderCalculator from "./renderCalc";


export default async function Calculator({params} : {params:Promise<{section:string, id:string}>}){
    const calcData : {section:string, id:string} = await params;
    return(
        <RenderCalculator key={calcData.id} section={calcData.section} id={calcData.id}/>
    );
}