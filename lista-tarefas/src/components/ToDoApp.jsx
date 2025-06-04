import { useState } from 'react';
import './ToDoApp.css';

const ToDoApp = () => {
    //Lista de tarefas
    const [todos, setTodos] = useState([]);

    //Estado de texto da tarefa
    const [inputValue, setInputValue] = useState("")

    //Adicionar tarefa
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() !== ''){
            const newTodo = {
                id: Date.now(),
                text: inputValue,
            }

            setTodos((prevTodos) => [...prevTodos, newTodo]);

            setInputValue("");
        }
    };
    
    return(
        <div className='app--container'>
            <h1 className='title'>Lista de Tarefas</h1>
            {/*Form para adicionar tarefas */}
            <form onSubmit={handleSubmit} className='form-container'>
                <input type='text' className='input-field' placeholder='Adicione uma tarefa' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}></input>
                <button type='submit' className='add-button'>Adicionar</button>
            </form>

            {/*Lista de tarefas*/}
            {todos.length === 0 && <p className='empty'>Não há tarefas.</p>}

            <ul className='todo-list'>
                {todos.map((todo)=>(
                    <li key={todo.id} className='todo-item'>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoApp;