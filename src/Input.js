import { useState } from "react"

function Input(){

    var [myname,setname]=useState("VASU")
    function changevalue(e){
        setname(e.target.value)
    }
    return (
        <div>
            <br></br>
            <input value={myname} onChange={changevalue}></input>
        </div>
    )
}

export default Input