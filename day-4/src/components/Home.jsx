import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CounterContext } from "../15-06-24/Counter.Context";
import { themeContext } from "../18-06-24/theme.context";

function Home(){
    const {state}=useContext(CounterContext);
    const{themeState,dispatch}=useContext(themeContext);
const router=useNavigate();
    return (        
    <div style={{backgroundColor:themeState.theme ==="LIGHT"?"yellow":"grey",}}>
      
    <h1>Home page:-{state?.counter }</h1>
    {/* <h1>Home page:-{state?.user?.name }</h1> */}
    <button onClick={()=>router("/counter")}> Go to Counter</button>
    <button onClick={()=>router("/useNavigate")}>Redirect to Routing page</button>
    <button onClick={()=>dispatch({type:themeState?.theme==="LIGHT"? "DARK":"LIGHT"})}> change{themeState?.theme==="LIGHT"? "LIGHT":"DARK"} theme</button>
    </div>
    );
}

export default Home;