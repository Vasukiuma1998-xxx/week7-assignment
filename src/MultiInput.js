import { useState } from "react"
import Resultcomp from "./Resultcomp"

function FormComp(){

    const [fname,setfname]=useState()
    const [lname,setlname]=useState()
    const [result,setresult]=useState("Result")

    function changefname(evt){
        setfname(evt.target.value)
    }
    function changelname(evt){
        setlname(evt.target.value)
    }
    function changeResult(e){
       e.preventDefault()
const num1=parseInt(fname)
const num2=parseInt(lname)

        setresult(num1+num2)

    }
    return(
        <div>
            <form>
                <br></br>
                <h4>Form</h4>
                Enter the first value:<input value={fname} onChange={changefname}></input>
                <br></br>
                <br></br>
                Enter the Second value:<input value={lname} onChange={changelname}></input>
                <button  type="submit"onClick={changeResult}>Submit</button>
            </form>
            <Resultcomp result={result}></Resultcomp>
        </div>
    )
}

export default FormComp