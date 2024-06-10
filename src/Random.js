import React, { useState } from 'react';

function Random(){

    var [number,setrandom]=useState(0)

    function generateRandom(){
       setrandom(Math.floor(Math.random()*10)+1)
    }
   return(
       <div >
           <h3>{number}</h3>
           <button onClick={generateRandom}>Generate Random Number</button>
       </div>
   )
   
}
export default Random