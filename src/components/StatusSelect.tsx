import {ChangeEvent} from "react";

type StatusSelectProps = {
    status: string,
    onChange: (event:ChangeEvent<HTMLSelectElement>) => void
}

export default function StatusSelect({onChange, status}: StatusSelectProps) {
    return   <select onChange={onChange} value={status}>
        <option value={"All"} >All</option>
        <option value={"Alive"}>Alive</option>
        <option value={"Dead"}>Dead</option>
        <option value={"unknown"}>Unknown</option>
    </select>
}