"use client"

type Props = {
    isNavOpen: boolean;
}

export default function Sidemenu({isNavOpen}: Props){
    return(
    <div className="flex flex-col items-center sidebar pointer-events-auto">
        <ul className={`menu bg-base-200 rounded-box
    w-[300px] h-full
    fixed top-[60px] left-0 z-40

    transform-gpu will-change-transform
    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isNavOpen 
      ? "translate-x-0 opacity-100 visible" 
      : "-translate-x-[110%] opacity-0 invisible pointer-events-none"}`} id="calclist">
            <li>
                <details open>
                <summary>Parent</summary>
                <ul>
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
        </ul>
    </div>
    );
}