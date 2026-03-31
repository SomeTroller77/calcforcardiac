import { Interpretation } from "./calculators/types";

export default function Result({interpretation, calculated_value, unit} : {interpretation:Interpretation, calculated_value:string | number, unit:string
}){
    var {level, message, diagnosis, advice} = interpretation;
    var levelClass = "";
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