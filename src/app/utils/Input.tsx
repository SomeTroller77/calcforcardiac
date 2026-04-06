"use client"
import { useState } from "react";
import { Input } from "./calculators/types";

export default function InputComponent({id, type, inputOptions, min, max, required, defaultUnit, unitOptions, name, placeholder, handleDataChange, info} : Input){
    const [showError, setErrorStatus] = useState(false);
    const [error, setError] = useState<string>();
    const [option, setOption] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const filteredOptions = inputOptions?.filter(e =>
        e.label.toLowerCase().includes(search.toLowerCase())
    );
    if(type === "number"){
        return(
            <>
                <fieldset className="fieldset bg-white bg-base-100 border border-base-300 rounded-box w-full min-w-0 p-2 overflow-visible">
                    <legend className="fieldset-legend text-black">{ typeof info === "string" ? 
                    <>
                    <div className="tooltip inline-block max-w-[140px] overflow-visible" data-tip={info}>
                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                            className="w-4 h-4" viewBox="0 0 416.979 416.979"
                        >
            <g>
                <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85
                    c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786
                    c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576
                    c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765
                    c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/>
            </g>
            </svg>
                    </div></> : null    
                } {name} {defaultUnit ? `(${defaultUnit})` : null} </legend>
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
                                handleDataChange !== undefined ? handleDataChange(id, e.target.value, type) : null;
                            }
                        }}
                        />
                    {showError ? <p className="label text-red-400">{error}</p> : null}
                </fieldset>
            </>
        );
    } else if(type === "select"){
        return(
            <fieldset className="fieldset bg-white bg-base-100 border border-base-300 rounded-box w-full min-w-0 p-2 overflow-visible">
                <legend className="fieldset-legend text-black"> { info ? 
                    <>
                    <div className="tooltip inline-block" data-tip={info}>
                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                            className="w-4 h-4" viewBox="0 0 416.979 416.979"
                        >
            <g>
                <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85
                    c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786
                    c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576
                    c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765
                    c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/>
            </g>
            </svg>
                    </div></> : null    
                } {name} {defaultUnit ? `(${defaultUnit})` : null} </legend>
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
                                <option key={e.label} value={e.value}>{e.label}</option>
                            )
                        })}
                    </select>
                {/* <span className="label text-red-400">Optional</span> */}
            </fieldset>
        )
    }else if(type === "checkbox"){
        return(
            <fieldset className="fieldset bg-white bg-base-100 border border-base-300 rounded-box w-full min-w-0 p-2 overflow-visible">
                <legend className="fieldset-legend text-black overflow-visible">  {name} {defaultUnit ? `(${defaultUnit})` : null} { info ? 
                    <>
                    <div className="tooltip ml-1 tooltip-top sm:tooltip-left ml-1" data-tip={info}>
                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                            className="w-4 h-4" viewBox="0 0 416.979 416.979"
                        >
            <g>
                <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85
                    c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786
                    c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576
                    c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765
                    c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/>
            </g>
            </svg>
                    </div></> : null    
                }</legend>
                <label className="label flex gap-3 items-start w-full">
                    <input type="checkbox" 
                    className="checkbox checkbox-neutral border-solid border-black mt-1 shrink-0"
                    onChange={(e) => {
                        handleDataChange !== undefined ? handleDataChange(id, e.target.checked) : null;
                    }} />
                    <span className="text-sm break-words whitespace-normal">
                        {placeholder}
                    </span>
                </label>
            </fieldset>
        )
    }else if(type === "search"){
        return (
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-black">
                {name} {defaultUnit ? `(${defaultUnit})` : null}
                </legend>
                <div className="relative">
                    <input
                    type="text"
                    className="input bg-white text-black border-black"
                    placeholder={search !== "" ? search : placeholder}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setOpen(true);
                        if(e.target.value === ""){
                            return;
                        }
                        handleDataChange !== undefined ? handleDataChange(id, e.target.value) : null;
                    }}
                    onFocus={() => setOpen(true)}
                    
                    />
                    {open && (
                    <div className="absolute left-0 top-full mt-0 z-50 w-full bg-white border border-black max-h-48 overflow-y-auto rounded shadow">
                        {filteredOptions?.length ? (
                            filteredOptions.map((e) => (
                            <div
                            key={e.value}
                            className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                                setSearch(e.label);
                                setOpen(false);
                                
                            }}
                            onMouseDown={() => {
                                    setSearch(e.label);
                                    setOpen(false);
                                    handleDataChange !== undefined ? handleDataChange(id, e.value) : null;
                                }} 
                            >
                            {e.label}
                            </div>
                        ))
                        ) : (
                        <div className="px-3 py-2 text-gray-500">No results</div>
                        )}
                    </div>
                    )}
                </div>
            </fieldset>
        );
    }
}