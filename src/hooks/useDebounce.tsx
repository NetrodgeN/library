import React, {useState} from 'react';

const UseDebounce = () => {
    const [typingTimeout, setTypingTimeout]=useState('')
    function debounce(func, wait){
        clearTimeout(typingTimeout);
        const timeout = setTimeout(()=>{
            func();
        }, wait)
        setTypingTimeout(timeout)
    }
    return debounce;
};

export default UseDebounce;