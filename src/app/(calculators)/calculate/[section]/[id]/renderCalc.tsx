"use client"

import InputComponent from "@/app/utils/Input";
import Input from "@/app/utils/Input";
import Result from "@/app/utils/Result";
import { CalculatorRegistry } from "@/app/utils/calculators/registry";
import { Interpretation, pastUsed } from "@/app/utils/calculators/types";
import { useState } from "react";

export default function RenderCalculator({section, id} : {section:string, id:string}){
    const calculator = CalculatorRegistry[section].calculators.find(e => e.id === id);
    const [form, setForm] = useState<Record<string, string | number>>({});
    const [value, setValue] = useState<string | number>("");
    function handleDataChange(key:string, value:string, type: "number" | "string" | boolean){
        if(type === "number"){
            setForm(prev => {
                return {
                    ...prev,
                    [key]:Number(value)
                }
            });
        }else{
            setForm(prev => {
                return {
                    ...prev,
                    [key]:value
                }
            });
        }
    }
    const [showResult, setResultStatus] = useState<boolean>(false);
    const [result, setResult] = useState<Interpretation>({
        level:"none",
        message:"none"
    });
    return calculator ? (
        <>
            <div className="mb-6 mt-10">
                <h1 className="text-2xl font-semibold">
                    {calculator?.name}
                </h1>

                <p className="text-gray-500 mt-1 max-w-xl">
                    {calculator?.desc}
                </p>
                {calculator?.unit ? <h1 className="text-1xl font-semibold">
                    Unit of the value:- {calculator?.unit}
                </h1> : null}
            </div>
            <div className="max-w-2xl">
                <form onSubmit={(e: React.SubmitEvent) => {
                    e.preventDefault();
                    setResultStatus(true);
                    const calculatedValue = calculator.calc_func(form);
                    const interpretation = calculator.interpret_func(calculatedValue)
                    setValue(calculatedValue);
                    setResult(interpretation);
                    const values : string = localStorage.getItem("pastUsed") || "[]";
                    const valuesobj : pastUsed[] = JSON.parse(values);
                    valuesobj.push(
                        {
                            calcInfo:{
                                section:section,
                                id:id,
                                name:calculator.name
                            },
                            value: calculatedValue,
                            interpretation: interpretation,
                            formData: form,
                            unit:calculator.unit 
                        }
                    );
                    localStorage.setItem("pastUsed", JSON.stringify(valuesobj));
                }}>
                    <div className="card max-w-auto bg-white bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                {calculator.inputs.map(e => {
                                    return(
                                        <InputComponent key={e.id} {...e} handleDataChange={handleDataChange}/>
                                    );
                                })}
                                <button type={"submit"} className="btn md:col-span-2 w-full text-white border-none bg-[#ed1b24] hover:bg-[#c9161e]"
                                >Calculate</button>
                            </div>
                        </div>
                    </div>
                    {showResult ? <h3>
                        <Result 
                            interpretation={result}
                            calculated_value={value}
                            unit={calculator.unit ?? ""}
                            section={undefined}
                            id={undefined}
                        />
                    </h3> : null}
                </form>
            </div>
        </>
    ) : null;
}