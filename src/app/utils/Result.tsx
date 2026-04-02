import { Calculator, Interpretation } from "./calculators/types";
import { CalculatorRegistry } from "./calculators/registry";
export default function Result({interpretation, calculated_value, unit, id, section} : {
    interpretation:Interpretation, 
    calculated_value:string | number, 
    unit:string | undefined, 
    id: string | undefined,
    section:string | undefined
}){
    var {level, message, diagnosis, advice} = interpretation;
    var levelClass = "";
    const calc : Calculator | undefined = id && section ? CalculatorRegistry[section].calculators.find(e => e.id === id) : undefined;
    if(level === "none" || level === "low"){
        levelClass = "bg-success";
    }else if(level === "moderate"){
        levelClass = "bg-orange-600 text-white";
    }else if(level === "high" || level === "severe"){
        levelClass = "bg-red-500 text-white";
    }else{
        levelClass = "bg-white";
    }
    return(
        <div className={`card max-w-auto ${levelClass} bg-base-100 shadow-sm mt-5 ${levelClass}`}>
            <div className="card-body">
                {calc ? <h2>{calc.name}</h2> : null}
                <h2 className="card-title self-center">Calculated Score/Value: {calculated_value} {unit}</h2>
                <p>{message}</p>
                {diagnosis ? <p>Diagnosis: {diagnosis}</p> : null}
                {advice ? <p>Advice: {advice}</p> : null}
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
}