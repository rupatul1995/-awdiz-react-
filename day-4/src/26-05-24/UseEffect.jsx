// import { useState } from "react";
// import { useEffect } from "react";

import { useState } from "react";

// function UseEffect(){
// const[counter, setCounter]=useState(1);
// const[counter2, setCounter2]=useState(1);
//     //state
//     //function
//     //effect
//     useEffect(() => {
//        alert("INSIDE THE FUNCTION");

//     });

// return  (
//     <div>
//          <h1>UseEffect</h1> 
//   <h1> counter:{counter}</h1>
//   <button onClick={() => setCounter(counter+1)}>+</button>
//   <h1> counter2:{counter2}</h1>
//   <button onClick={() => setCounter2(counter2+1)}>+</button>
//   </div>
// );
// }
// export default UseEffect;


function UseEffect(){
    const[counter, setCounter]=useState(1);

    function Increment(){
        setCounter(counter+1);
    }
    function Decrement(){
        if(counter>1){
            setCounter(counter-1);  
        }
    }
    
    function Reset(){
        setCounter(1);
    }
    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}
export default UseEffect;