import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Component';
import Random from './Random';

import FormComp from './MultiInput';

const root = ReactDOM.createRoot(document.getElementById('root'));


function  ChangeName(){

  var [myname,setmyname]=useState("John")
  function change(){
    setmyname("vasuki")
  }
return(
  <div>
    <h2>{myname}</h2>
    <button onClick={change}>change</button>
  </div>
)
}
root.render(
  <div>
    <ChangeName/>
    <Counter></Counter>
    <Random></Random>
   
    <FormComp></FormComp>
  </div>
);

