import InputComponent from "@/app/utils/Input";
import Input from "@/app/utils/Input";
import { CalculatorRegistry } from "@/app/utils/calculators/registry";
export default async function Calculator({params} : {params:Promise<{section:string, id:string}>}){
    const calcData : {section:string, id:string} = await params;
    const calculator = CalculatorRegistry[calcData.section].calculators.find(e => e.id === calcData.id);
    console.log(calculator);
    return calculator ? (
        <>
            <div className="mb-6 mt-10">
                <h1 className="text-2xl font-semibold">
                    {calculator?.name}
                </h1>

                <p className="text-gray-500 mt-1 max-w-xl">
                    {calculator?.desc}
                </p>
                <h1 className="text-1xl font-semibold">
                    Unit of the value:- {calculator?.unit}
                </h1>
            </div>
            {calculator.inputs.map(e => {
                return(
                    <InputComponent {...e}/>
                );
            })}
        </>
    ) : null;
}