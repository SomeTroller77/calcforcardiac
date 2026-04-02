import { Calculator, Interpretation } from "./calculators/types";
import { CalculatorRegistry } from "./calculators/registry";
import Link from "next/link";
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
                {calc ? <Link className="flex items-center gap-2" href={`/calculate/${section}/${id}`}>
                    <svg 
                        className="w-7 h-7 shrink-0 align-middle" 
                        viewBox="0 0 24 24" fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8.37032 11.0726L5.41421 14.0287C4.63317 14.8097 4.63316 16.076 5.41421 16.8571L6.95611 18.399C7.73715 19.18 9.00348 19.18 9.78453 18.399L12.7406 15.4429M11.0726 8.37032L14.0287 5.41421C14.8097 4.63317 16.076 4.63316 16.8571 5.41421L18.399 6.95611C19.18 7.73715 19.18 9.00348 18.399 9.78453L15.4429 12.7406M6.64883 6.64883L4.88296 4.88296M19.0992 19.0992L17.3333 17.3333M9.35119 5.87299V4M14.6488 20V18.127M5.87299 9.35119H4M20 14.6488H18.127" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>              
                <h6 className="leading-none">{calc.name}</h6></Link> : null}
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