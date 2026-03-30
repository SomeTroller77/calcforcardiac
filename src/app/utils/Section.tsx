import { Calculator } from "./calculators/types";

export default function Section({sectionName, Calculators, id} : {sectionName:string, Calculators:Calculator[], id:string}){
    return(
        <li>
            <details>
            <summary>{sectionName}</summary>
            <ul>
                {Calculators.map((e) => {
                    return(
                        <li key={e.id}>
                            <a href={`/calculate/${id}/${e.id}`}>
                                {e.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
            </details>
        </li>
    )
}