"use client"
import { useState } from "react";
import { Input } from "./calculators/types";

export default function InputComponent({id, type, inputOptions, min, max, required, defaultUnit, unitOptions, name, placeholder, handleDataChange} : Input){
    const [showError, setErrorStatus] = useState(false);
    const [error, setError] = useState<string>();
    const [option, setOption] = useState<string>("");
    if(type === "number"){
        return(
            <>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-black">{name}</legend>
                        <input type="number"
                        id={id} 
                        className="input bg-white border-solid border-black" 
                        placeholder={placeholder} 
                        min={min} 
                        max={max} 
                        step={0.1}
                        required={required}
                        onChange={(e) => {
                            if(e.target.value === ""){
                                return;
                            }
                            const val = Number(e.target.value);
                            if(min !== undefined && val < min){
                                setError(`Value must be greater than or equal to ${min}`)
                                setErrorStatus(true);
                            }else if(max !== undefined && val > max){
                                setError(`Value must be smaller than or equal to ${max}`);
                                setErrorStatus(true);
                            }else{
                                setError("");
                                setErrorStatus(false);
                                handleDataChange !== undefined ? handleDataChange(id, e.target.value) : null;
                            }
                        }}
                        />
                    {showError ? <p className="label text-red-400">{error}</p> : null}
                </fieldset>
            </>
        );
    } else if(type === "select"){
        return(
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-black">{name}</legend>
                    <select value={option} 
                    className="select bg-white border-solid border-black"
                    onChange={(e) => {
                        setOption(e.target.value);
                        handleDataChange !== undefined ? handleDataChange(id, e.target.value) : null;
                    }}
                    required={required}
                    >
                        <option value="" disabled hidden>{placeholder}</option>
                        {inputOptions?.map(e => {
                            return(
                                <option key={e.label} value={e.value}>{e.value}</option>
                            )
                        })}
                    </select>
                {/* <span className="label text-red-400">Optional</span> */}
            </fieldset>
        )
    }
}