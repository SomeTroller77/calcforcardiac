import LayoutClient from "./layoutClient";
import { Roboto } from "next/font/google";
export default function CalculatorsLayout({children} : {children:React.ReactNode}){
    return(
        <>
            <LayoutClient>{children}</LayoutClient>
        </>
    )
}