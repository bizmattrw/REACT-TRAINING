import { useState } from "react";
function Button({btnClass,btnName}){
    const [count,setCount]=useState(0);
    function handleClick(){
setCount(count+1)
    }
    return(
        <>
        <button onClick={handleClick} className={btnClass}>{btnName}</button>
        <h1>You clicked {count} times</h1>
        </>
    )
}
export default Button