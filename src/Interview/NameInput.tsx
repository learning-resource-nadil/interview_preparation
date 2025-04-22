import { SetStateAction, useState } from "react"

function NameInput(){

const [name,setName]=useState("");
const [submitName,setSubmitName] =useState("");

const handelValue =(event: { target: { value: SetStateAction<string>; }; })=>{
    setName(event.target.value)
}
const handleClick =()=>{
    setSubmitName(name);
}
    return(
        <div>
            <label>Name:
                <input
                type="text" value={name} onChange={handelValue}
                />
            </label>
            <button onClick={handleClick}>submit</button>
            {submitName && <p>Submited Name is {submitName}</p>}
        </div>
    )
}
export default NameInput;