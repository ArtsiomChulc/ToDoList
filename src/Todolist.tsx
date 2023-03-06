import React, { useState } from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void;

}


export function Todolist(props: PropsType) {
    let [filterValue, setFilterValue] = useState('All');

    const filterTask = (name: string) => {
        setFilterValue(name)

        console.log(name);
    }

    let filteredTask = props.tasks;
    if (filterValue === 'Active') {
        filteredTask = props.tasks.filter((el) => el.isDone)
    }
    if (filterValue === 'Completed') {
        filteredTask = props.tasks.filter((el) => !el.isDone)
    }



    return <div>
        <h3>{props.title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            {filteredTask.map(el => {
                return (
                    <li key={el.id}>
                        <button onClick={() => props.removeTask(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone} />
                        <span>{el.title}</span>
                    </li>
                )
            })}
            {/* <li><input type="checkbox" checked={props.tasks[0].isDone} /> <span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[1].isDone} /> <span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[2].isDone} /> <span>{props.tasks[2].title}</span></li> */}
        </ul>
        <div>
            <button onClick={() => filterTask('All')}>All</button>
            <button onClick={() => filterTask('Active')}>Active</button>
            <button onClick={() => filterTask('Completed')}>Completed</button>
        </div>
    </div>
}
