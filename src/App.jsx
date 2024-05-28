/* eslint-disable react/prop-types */
import { useDebounce } from "./hooks/useDebounce"
import { useEffect, useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); //500 milliseconds debounce

  // useEffect(() => {

  // }, [debouncedValue])

  return (
    <>
    Debounced value is {debouncedValue}
      <input
      type = "text"
      value={inputValue}
      placeholder="Search"
      onChange={(e) => setInputValue(e.target.value)} />
    </>
  )

}


export default App;
