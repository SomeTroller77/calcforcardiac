"use client"

import Navbar from "@/app/utils/Navbar"
import Sidemenu from "@/app/utils/Sidemenu";
import { useState } from "react";

export default function Calculators(){
    const [navbar, setNavbar] = useState<boolean>(false);
    return(
        <div className="grid grid-cols-[300px_1fr] grid-rows-[60px_1fr_40px] overflow-hidden calculators-container">
            <Navbar navbarToggle={setNavbar}/>
            <Sidemenu isNavOpen={navbar}/>
            <div className="content"></div>
            <div className="footer"></div>
        </div>
    );
}