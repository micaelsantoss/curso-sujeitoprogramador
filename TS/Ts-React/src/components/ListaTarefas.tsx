import { useState, useRef, useEffect, useMemo, useCallback } from "react";

function ListaTarefas() {
    const inputRef = useRef<HTMLInputElement>(null); // referencia para o input
    const firstRender = useRef(true); // referencia para o primeiro render
    const [tasks, setTasks] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [editTask, setEditTask] = useState({
        enabled: false,
        task: ''
    });

    useEffect(() => {
       const savedTasks = localStorage.getItem('@tasks');

       if(savedTasks){
        setTasks(JSON.parse(savedTasks));
       }

    }, []);

    useEffect(() => {
        if(firstRender.current){
            firstRender.current = false;
            return;
        }

        localStorage.setItem('@tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = useCallback (() => { // useCallback para renderizar a função apenas quando o input ou editTask mudar
       if(!input){
        alert("Digite uma tarefa");
        return;
       }

        setTasks(tasks => [...tasks, input]);
        setInput("");

        if(editTask.enabled){
            handleEditTask();
            return
        }
    }, [input, tasks])

    function handleEditTask() {
        const findIndexTask = tasks.findIndex(task => task === editTask.task);
        const allTasks = [...tasks];
        
        allTasks[findIndexTask] = input;
        setTasks(allTasks);

        setInput("");
        setEditTask({
            enabled: false,
            task: ''
        })
    }

    function handleRemoveTask(item: string) {
        const filteredTasks = tasks.filter((task) => task !== item);
        setTasks(filteredTasks);
        setInput("");
    }
    function handleUpdateTask(item: string) {
        inputRef.current?.focus();

        setInput(item);
        setEditTask({
            enabled: true,
            task: item
        })
    }

    const totalTarefas = useMemo(() => { // memoriza o valor, só recalcula se o array tasks mudar
        return tasks.length;
    }, [tasks])

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <hr />
            
            <label htmlFor="">Tarefa: </label>
            <input 
                type="text" 
                placeholder="Digite sua tarefa"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputRef}                
            />
            <button onClick={handleAddTask}>{editTask.enabled ? "Atualizar Tarefa" : "Cadastrar Tarefa" }</button>
      
            <hr />
            <h2>Total de tarefas: {totalTarefas}</h2>
            <hr />

            {tasks.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => {handleRemoveTask(item)}}>Remover</button>
                    <button onClick={() => {handleUpdateTask(item)}}>Atualizar</button>
                </li>
            ))}
        </div>
    )
}

export default ListaTarefas;