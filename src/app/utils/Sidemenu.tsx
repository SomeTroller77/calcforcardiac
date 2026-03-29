"use client"

import { CalculatorRegistry } from "./calculators/registry";
import Section from "./Section";
type Props = {
    isNavOpen: boolean;
}

export default function Sidemenu({isNavOpen}: Props){
    const sectionNames = Object.keys(CalculatorRegistry);
    return(
    <div className="flex flex-col items-center sidebar pointer-events-auto">
        <ul className={`menu bg-base-200 rounded-box
    w-[300px] h-full
    fixed top-[60px] left-0 z-40

    transform-gpu will-change-transform
    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isNavOpen 
      ? "translate-x-0 opacity-100 visible" 
      : "-translate-x-[110%] opacity-0 invisible pointer-events-none"}`} id="calclist">
            {
                sectionNames.map((e) => {
                    return <Section key={e} id={e} sectionName={CalculatorRegistry[e].displayName} Calculators={CalculatorRegistry[e].calculators}/>
                })
            }
        </ul>
    </div>
    );
}