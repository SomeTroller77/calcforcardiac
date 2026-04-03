"use client"
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";

export default function Home(){
    const el = useRef(null);
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['A minimal friction', 'A zero-login'],
        typeSpeed: 50,
        loop:true
      });
      return () => {
        typed.destroy(); // cleanup (IMPORTANT)
      };
    }, []);
    
    return(
      <>
        <div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90vw] max-w-[500px] h-[300px] bg-red-500/20 blur-3xl"></div>
          <div className="hero relative overflow-hidden bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-[size:20px_20px] min-h-screen">
             <div className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-contain">
              
             </div>
             <svg
    className="absolute inset-0 w-[200%] h-full scale-250 md:scale-100 opacity-30 animate-ecg"
    viewBox="0 0 1000 100"
    fill="none"
    stroke="#ef4444"
  >
    <path
  d="M0 50 L80 50 L100 20 L120 80 L140 50 L220 50 L240 30 L260 70 L280 50 L360 50 L380 20 L400 80 L420 50 L500 50 L580 50 L600 20 L620 80 L640 50 L720 50 L740 30 L760 70 L780 50 L860 50 L880 20 L900 80 L920 50 L1000 50"
  stroke="#ef4444"
  className="md:stroke-[2] stroke-[3]"
  strokeWidth="2"
/>
  </svg>
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold text-red-500">CalcForCardiac: <span
  ref={el}
  className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent"
/></h1><h1 className="text-5xl font-bold text-blue-500"> medical calculator</h1>
                <p className="py-6">
                  When every second counts, clarity matters. CalcForCardiac gives you instant, precise cardiac calculations — no clutter, no login, just what you need.
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  No login required • Free • Instant results 
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Made with ❤️ by Saksham Vitwekar
                </p>
                <div className="flex gap-4 justify-center mt-6 overflow-hidden">
                    <Link href={"/calculators"}><button className="btn bg-[#ef4444] hover:bg-[#bb0707]">Get Started</button></Link>
                    <Link href={"https://github.com/SomeTroller77/calcforcardiac"}><button className="btn bg-[#0d1117] hover:bg-[#000]">Github Repo</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center overflow-hidden">
            <img src="./website_calculators.gif" width={800}/>
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 tracking-tight text-white">
              Start with What You Need
            </h2>
            <p className="text-sm sm:text-base text-gray-400 text-center mb-10">
              Fast and reliable medical calculators — ready when you are.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
              <div className="card card-border bg-[#161b22] border border-gray-800 rounded-xl p-5 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10 transition">
                <div className="card-body">
                  <h2 className="card-title">Cockcroft Gault Equation</h2>
                  <p>Takes age, weight, creatinine and gender as input and returns Creatinine Clearance</p>
                  <div className="card-actions justify-end">
                    <Link href={"/calculate/cockcroft-gault"}><button className="btn bg-[#ef4444] hover:bg-[#bb0707]">Calculate</button></Link>
                  </div>
                </div>
              </div>
              <div className="card card-border bg-[#161b22] border border-gray-800 rounded-xl p-5 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10 transition">
                <div className="card-body">
                  <h2 className="card-title">IMPACT Score</h2>
                  <p>A risk assessment score used to calculate 1-year mortality prediction rate after a cardiac transplant by using 12 parameters</p>
                  <div className="card-actions justify-end">
                    <Link href={"/calculate/impact-score"}><button className="btn bg-[#ef4444] hover:bg-[#bb0707]">Calculate</button></Link>
                  </div>
                </div>
              </div>
              <div className="card card-border bg-[#161b22] border border-gray-800 rounded-xl p-5 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10 transition">
                <div className="card-body">
                  <h2 className="card-title">TIMI Score</h2>
                  <p>a clinical risk assessment tool used to predict 14-day mortality and ischemic events in patients with UA/NSTEMI (unstable angina/non-ST-elevation myocardial infarction)</p>
                  <div className="card-actions justify-end">
                    <Link href={"/calculate/timi-score"}><button className="btn bg-[#ef4444] hover:bg-[#bb0707]">Calculate</button></Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <Link href={"https://github.com/SomeTroller77"}>
            <p className="text-xs text-gray-500 mt-16 mb-8 text-center">
              
            </p>
          </Link>
        </div>
      </>
    );
}