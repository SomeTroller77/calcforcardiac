import Link from "next/link";

export default function Bookmark({id, section, name, desc}:{id:string, section:string, name:string, desc:string}){
    return(
        <div className="card card-dash bg-white text-black w-full mt-2">
            <div className="card-body bg-white text-black">
                <h2 className="card-title bg-white text-black">{name}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end bg-white text-black">
                    <Link href={`/calculate/${section}/${id}`}><button className="btn bg-[#ed1b24] hover:bg-[#8B0000]">Calculate</button></Link>
                </div>
            </div>
        </div>
    );
}