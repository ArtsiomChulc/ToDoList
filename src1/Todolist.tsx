import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { FilterValueType } from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (newTitle: string) => void
    filterTask: (value: FilterValueType) => void
}


export function Todolist(props: PropsType) {
    // let [filterValue, setFilterValue] = useState('All');
    let [newTitle, setNewTitle] = useState('');
    const elementLi = props.tasks.map(el => {
        return (
            <li key={el.id}>
                <button onClick={() => removeTaskHandler(el.id)}>X</button>
                <input type="checkbox" checked={el.isDone} />
                <span>{el.title}</span>
            </li>
        )
    })


    // const filterTask = (name: string) => {
    //     setFilterValue(name)
    // }

    // let filteredTask = props.tasks;
    // if (filterValue === 'Active') {
    //     filteredTask = props.tasks.filter((el) => el.isDone)
    // }
    // if (filterValue === 'Completed') {
    //     filteredTask = props.tasks.filter((el) => !el.isDone)
    // }
    const addTaskHandler = () => {
        props.addTask(newTitle);
        setNewTitle('');
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler();
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const removeTaskHandler = (elID: string) => {
        props.removeTask(elID);
    }

    const allBtnClick = (value: FilterValueType) => {
        props.filterTask(value)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onKeyPress={onKeyPressHandler} onChange={onChangeHandler} />
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {/* {props.tasks.map(el => {
                // const removeTaskHandler = () => {
                //     props.removeTask(el.id);
                // }
                return (
                    <li key={el.id}>
                        <button onClick={() => removeTaskHandler(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone} />
                        <span>{el.title}</span>
                    </li>
                )
            })} */}

            {elementLi}


            {/* <li><input type="checkbox" checked={props.tasks[0].isDone} /> <span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[1].isDone} /> <span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[2].isDone} /> <span>{props.tasks[2].title}</span></li> */}
        </ul>
        <div>
            {/* <button onClick={() => props.filterTask('All')}>All</button>
            <button onClick={() => props.filterTask('Active')}>Active</button>
            <button onClick={() => props.filterTask('Completed')}>Completed</button> */}
            <button onClick={() => allBtnClick('all')}>All</button>
            <button onClick={() => allBtnClick('active')}>Active</button>
            <button onClick={() => allBtnClick('completed')}>Completed</button>
        </div>
    </div>
}
