import Input from "@/app/utils/Input";

export default async function Calculator({params} : {params:Promise<{section:string, id:string}>}){
    const calcData : {section:string, id:string} = await params;
    return(
        <>
            <h1>Section:- {calcData.section}</h1>
            <h1>Calculator ID:- {calcData.id}</h1>
            <Input/>
        </>
    )
}