"use client"
import { useState } from "react";
import Sidemenu from "../utils/Sidemenu";
import Navbar from "../utils/Navbar";
import { Roboto } from "next/font/google";
import Footer from "../utils/Footer";
const font = Roboto({});
export default function LayoutClient({children} : {children:React.ReactNode}){
    const [navbar, setNavbar] = useState<boolean>(false);
    return(
        <div className={`grid grid-cols-[300px_1fr] grid-rows-[60px_1fr_40px] calculators-container ${font.className}`}>
            <Navbar navbarToggle={setNavbar}/>
            <Sidemenu isNavOpen={navbar}/>
            <div className="content w-full flex justify-center px-4 pb-6">
                <div className="max-w-2xl overflow-x-hidden">
                    {children}
                </div>
            </div>
            <div className="footer-area w-full"><Footer/></div>
        </div>
    );
}