    "use client"
    import Link from "next/link";
    type Props = {
    navbarToggle: React.Dispatch<React.SetStateAction<boolean>>;
    };

    export default function Navbar({navbarToggle}: Props){
        return(
            <div className="navbar h-14 bg-base-100 shadow-sm z-50 sticky top-0 md:col-span-2">
                <div className="navbar-start sticky">
                    <div className="dropdown">
                        <button onClick={
                            () => {
                                navbarToggle(prev => !prev);
                            }
                        }>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        </button>
                        
                    </div>
                </div>
                <div className="navbar-center flex items-center justify-center">
                    <Link href="/calculators" className="flex items-center gap-2 w-fit">
                        <img src="/calcforcardiac_logo.png" className="h-9 md:h-10 w-auto object-contain" />
                        <span className="text-lg font-semibold">
                            CalcForCardiac
                        </span>
                    </Link>
                </div>
                <div className="navbar-end"/>
            </div>
        );
    }