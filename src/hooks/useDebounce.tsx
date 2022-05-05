import {useState} from "react";

const UseDebounce = () => {
    const [typingTimeout, setTypingTimeout]=useState<number|NodeJS.Timeout>(0)
    function debounce(func:Function, wait:number){
        clearTimeout(Number(typingTimeout));
        const timeout = setTimeout(()=>{
            func();
        }, wait)
        setTypingTimeout(timeout)
    }
    return debounce;
};

export default UseDebounce;