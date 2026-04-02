"use client"

import { pastUsed } from "@/app/utils/calculators/types";
import Result from "@/app/utils/Result";
import { useEffect, useState } from "react";

export default function Calculators(){
    const [pastUsedObj, setPastUsedObj] = useState<pastUsed[]>([]);
    const [index, setIndex] = useState<number>(0)
    useEffect(() => {
        const pastUsed : string = localStorage.getItem("pastUsed") || "[]";
        setPastUsedObj(JSON.parse(pastUsed)); 
    }, [])
    
    return(
        <>   
                <div className="flex flex-col justify-center mt-2">
                {
                    pastUsedObj.length !== 0 ?
                        <Result id={pastUsedObj[index].calcInfo.id} 
                        section={pastUsedObj[index].calcInfo.section} 
                        interpretation={pastUsedObj[index].interpretation} 
                        calculated_value={pastUsedObj[index].value} 
                        unit={pastUsedObj[index].unit}/>
                    : <h1>Empty</h1>
                }
                <div className="join mt-2 self-center">
                    <button className="join-item btn bg-[#ed1b24] text-black" onClick={() => {
                        if(index !== 0 ){
                            setIndex(index - 1);
                        }
                    }}>«</button>
                    <button className="join-item btn bg-white text-black">Result {index + 1}</button>
                    <button className="join-item btn bg-[#ed1b24] text-black" onClick={() => {
                        if(index < pastUsedObj.length - 1){
                            setIndex(index+1);
                        }
                    }}>»</button>
                </div>
            </div>
            
        </>
    );
}