import { useEffect} from "react"

export function useInterval(callback, n){
    useEffect(() => {
        const value = setInterval(() => {
            callback();
        }, n)

        return () => {
            clearInterval(value);
        }
    }, [callback, n])

    
}