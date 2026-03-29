import LayoutClient from "./layoutClient";

export default function CalculatorsLayout({children} : {children:React.ReactNode}){
    return(
        <>
            <LayoutClient>{children}</LayoutClient>
        </>
    )
}