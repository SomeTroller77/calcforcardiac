"use client"

import { Calculator, pastUsed } from "@/app/utils/calculators/types";
import Result from "@/app/utils/Result";
import { useEffect, useState } from "react";
import GetQuote from "@/app/utils/getQuote";
import { CalculatorRegistry } from "@/app/utils/calculators/registry";
import Bookmark from "@/app/utils/Bookmark";
export default function Calculators(){
    const [pastUsedObj, setPastUsedObj] = useState<pastUsed[]>([]);
    const [bookmarks, setBookmarks] = useState<{id:string, section:string}[]>();
    const [index, setIndex] = useState<number>(0)
    useEffect(() => {
        const load = () => {
            const stored:string = localStorage.getItem("pastUsed") || "[]";
            const parsed = JSON.parse(stored);
            setPastUsedObj([...parsed]);
            const rawBookmark = localStorage.getItem("bookmarks") || "[]";
            const bookmarkarr: { id: string; section: string }[] = JSON.parse(rawBookmark);
            setBookmarks(bookmarkarr)
        };
        load();
    }, [])
    return(        
        <>   
                <GetQuote/>
                {pastUsedObj.length !== 0 ? <div className="card card-border bg-white text-black w-full mt-5">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Past Results: ({pastUsedObj.length})</h2>
                        <div className="flex flex-col justify-center mt-2">
                        <Result id={pastUsedObj[index].calcInfo.id} 
                        section={pastUsedObj[index].calcInfo.section} 
                        interpretation={pastUsedObj[index].interpretation} 
                        calculated_value={pastUsedObj[index].value} 
                        unit={pastUsedObj[index].unit}/>
                </div>
                        <div className="card-actions justify-center">
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
                    </div>
                </div> : null}
                
                <div className="card border-4 border-[#ed1b24] bg-white text-black w-full mt-5">
                    <div className="card-body">
                        <h2 className="card-title">Bookmarks: ({bookmarks?.length})</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {bookmarks?.length !== 0 ? bookmarks?.map(e => {
                                        console.log(e.id);
                                        const calc = CalculatorRegistry[e.section].calculators.find(c => c.id === e.id)
                                        return <Bookmark section={e.section} name={calc?.name || "Not Loaded"} desc={calc?.desc || "Not Loaded"} id={e.id}/>
                                    }) : <h2>Add bookmarks to get started!</h2>}
                        </div>
                    </div>
                </div>
                
        </>
    );
}