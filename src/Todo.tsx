import React from "react";

type PropsType = {
    title: string
    body?: number
    tasks: TaskType[]
}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}


const Todo = (props: PropsType) => {
    const elementLi = props.tasks.map((el) => {
        return (
            <li><input type="checkbox" checked={el.isDone} /><span>{el.title}</span></li>
        )
    })
    return (
        <div className="todo">
            <div>
                <h3>{props.title}</h3>
                <h3>{props.body}</h3>
                <div>
                    <input />
                    <button>+</button>
                </div>
                <ul>
                    {elementLi}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}
export default Todo;
