import LayoutClient from "./layoutClient";

export default function CalculatorsLayout({children} : {children:React.ReactNode}){
    return(
        <>
            <html data-theme="dark">
                <body>
                    <LayoutClient>{children}</LayoutClient>
                </body>
            </html>
            
        </>
    )
}