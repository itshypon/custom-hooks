/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import axios from "axios"

export function useTodos(n) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
          setTodos(res.data.todos);
          setLoading(false);
        });
      }, n * 1000);
  
      return () => {
        clearInterval(interval)
      }
    }, [n]);
  
    return { todos, loading };
  }

 export function Track({ todo }) {
    return (
      <div>
        {todo.title}
        <br />
        {todo.description}
      </div>
    );
  }
  