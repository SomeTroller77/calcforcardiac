"use client"
import { useState } from "react";
import Sidemenu from "../utils/Sidemenu";
import Navbar from "../utils/Navbar";
import { Roboto } from "next/font/google";
const font = Roboto({});
export default function LayoutClient({children} : {children:React.ReactNode}){
    const [navbar, setNavbar] = useState<boolean>(false);
    return(
        <div className={`grid grid-cols-[300px_1fr] grid-rows-[60px_1fr_40px] overflow-hidden calculators-container ${font.className}`}>
            <Navbar navbarToggle={setNavbar}/>
            <Sidemenu isNavOpen={navbar}/>
            <div className="content">
                {children}
            </div>
            <div className="footer"></div>
        </div>
    );
}