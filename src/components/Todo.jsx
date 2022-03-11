import { useEffect, useState } from "react";

import axios from "axios"

export const Todos = () => {

    const [text, setText] = useState("");
    const [todo, setTodo] = useState([])

    const [page, setPage] = useState(1);

    
    useEffect(() => {
  

        getData()
        
    }, [page])
    
    // const totalPages = Math.ceil(todos.length / 3);

    // console.log(todos)

    const getData = () => {
        axios.get(`http://localhost:3001/todos?_limit=5&_page=${page}`).then(res => {
            setTodo(res.data)
        })
    }

    return <div>
        <input type = "text" onChange={ e => setText(e.target.value)} />
        <button onClick={() => {
            fetch("http://localhost:3001/todos", {
                method: "POST",
                body: JSON.stringify({title: text, status: false}),
                headers: {
                    "content-type": "application/json"
                }
            }).then(() => {
                getData()
            });
        }}>Add Todo</button>

        {todo.map((g) => (
             <div> {g.id}. {g.title} </div>
        ))}

        <button onClick={() => {
            if(page > 1) {
                setPage(page - 1)
            }
        }}>Prev</button>
        <button onClick={() => {
            if(todo.length > 2 ){
                setPage(page + 1)
            }
            
        }}>Next</button>

    </div>
}