import React, { useState } from 'react';
// counter App
function Counter(){
    var [count,setcount]=useState(0)

    function increment(){
        setcount(count+1)
    }
    function decreament(){
        setcount(count-1)
    }

    return(
        
        <div>
            <h3>{count}</h3>
            <button onClick={increment}>Incre</button>
            <button onClick={decreament}>Decrea</button>
        </div>
    )

}

// Random number





export default Counter
