"use client"
import Link from "next/link";
type Props = {
  navbarToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({navbarToggle}: Props){
    return(
        <div className="navbar h-14 bg-base-100 shadow-sm z-50 sticky top-0">
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
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                </button>
                <button>
                    
                </button>
                <label className="flex cursor-pointer gap-2 mt-0.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
            </div>
    );
}