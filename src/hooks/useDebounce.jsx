import { useEffect, useState } from "react";


export function useDebounce(inputValue, timeout){
    const [value, setValue] = useState();
    useEffect(()=> {
        let timeoutNumber = setTimeout(()=>{
            setValue(inputValue);
        }, timeout)

        return () => {
            clearTimeout(timeoutNumber);
        }
    }, [inputValue, timeout])

    return value;
}