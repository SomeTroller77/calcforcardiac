"use client"

import { useEffect, useState } from "react";
import { Calculator } from "./calculators/types";

export default function Section({sectionName, Calculators, id} : {sectionName:string, Calculators:Calculator[], id:string}){
    const [bookmarks, setBookmarks] = useState<{section:string, id:string}[]>([]);
    useEffect(() => {
        const bookmarkedStr:string = localStorage.getItem("bookmarks") || "[]";
        const bookmarkedObj : {section:string, id:string}[] = JSON.parse(bookmarkedStr);
        console.log(bookmarkedObj);
        setBookmarks(bookmarkedObj);
    }, [])
    return(
        <li>
            <details>
            <summary>{sectionName}</summary>
            <ul>
                {Calculators.map((e) => {
                    return(
                        <li className="flex items-center w-full" key={e.id}>
                            <div className="flex items-start w-full">
    
                                <a
                                href={`/calculate/${id}/${e.id}`}
                                className="flex-1"
                                >
                                    {e.name}
                                </a>
                            <button
                                className="shrink-0"
                                onClick={() => {
                                    const bookmarks:string = localStorage.getItem("bookmarks") || "[]";
                                    var bookmarksArr:{section:string, id:string}[] = JSON.parse(bookmarks);
                                    if(bookmarksArr.findIndex(f => e.id === f.id) !== -1){
                                        bookmarksArr = bookmarksArr.filter(g => g.id !== e.id);
                                    }else{
                                        bookmarksArr.push({section:id, id:e.id});
                                    }
                                    setBookmarks(bookmarksArr);
                                    localStorage.setItem("bookmarks", JSON.stringify(bookmarksArr));
                                }}
                            >

                                { bookmarks.find(f => e.id === f.id) ? <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        className="w-6 h-6"
                                        viewBox="0 0 256 256"
                                        >
                                        <g
                                            fill="#ed1b24"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth="1"
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit="10"
                                            strokeDasharray=""
                                            strokeDashoffset="0"
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="inherit"
                                            style={{ mixBlendMode: "normal" }}
                                        >
                                            <g transform="scale(5.12,5.12)">
                                            <path d="M37,48c-0.17578,0 -0.34766,-0.04687 -0.50391,-0.13672l-11.49609,-6.70703l-11.49609,6.70703c-0.30859,0.17969 -0.69141,0.18359 -1,0.00391c-0.3125,-0.17969 -0.50391,-0.50781 -0.50391,-0.86719v-44c0,-0.55078 0.44922,-1 1,-1h24c0.55469,0 1,0.44922 1,1v44c0,0.35938 -0.19141,0.6875 -0.50391,0.86719c-0.15234,0.08984 -0.32422,0.13281 -0.49609,0.13281z" />
                                            </g>
                                        </g>
                                    </svg> : <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 256 256"
                                    className="w-6 h-6"
                                    >
                                    <g
                                        fill="#ed1b24"
                                        fillRule="nonzero"
                                        stroke="none"
                                        strokeWidth="1"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        strokeMiterlimit="10"
                                        strokeDasharray=""
                                        strokeDashoffset="0"
                                        fontFamily="none"
                                        fontWeight="none"
                                        fontSize="none"
                                        textAnchor="inherit"
                                        style={{ mixBlendMode: "normal" }}
                                    >
                                        <g transform="scale(5.12,5.12)">
                                        <path d="M12.8125,2c-0.47656,0.08984 -0.82031,0.51172 -0.8125,1v44c-0.00391,0.35938 0.1875,0.69141 0.49609,0.87109c0.30859,0.18359 0.69141,0.18359 1.00391,0.00391l11.5,-6.71875l11.5,6.71875c0.3125,0.17969 0.69531,0.17969 1.00391,-0.00391c0.30859,-0.17969 0.5,-0.51172 0.49609,-0.87109v-44c0,-0.55078 -0.44922,-1 -1,-1h-24c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM14,4h22v41.25l-10.5,-6.125c-0.30859,-0.17969 -0.69141,-0.17969 -1,0l-10.5,6.125z" />
                                        </g>
                                    </g>
                                </svg>}
                            </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            </details>
        </li>
    )
}