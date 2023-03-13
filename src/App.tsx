import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Todolist } from './Todolist';


export type FilterValueType = 'all' | 'active' | 'completed';


function App() {

    // let tasks1 = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false },
    //     { id: 4, title: "Redux", isDone: false }
    // ]
    // const tasks2 = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]

    let [tasks1, setTasks] = useState(
        [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Redux", isDone: false }
        ]
    )
    let [filterValue, setFilterValue] = useState<FilterValueType>('all');

    let filteredTask = tasks1;
    if (filterValue === 'active') {
        filteredTask = tasks1.filter((el) => el.isDone)
    }
    if (filterValue === 'completed') {
        filteredTask = tasks1.filter((el) => !el.isDone)
    }
    // if (filterValue === 'All') {
    //     filteredTask = tasks1;
    // }

    const filterTask = (value: FilterValueType) => {
        setFilterValue(value);
    }

    const addTask = (newTitle: string) => {
        const newTask = { id: v1(), title: newTitle, isDone: false };
        setTasks([newTask, ...tasks1]);

    }

    const removeTask = (id: string) => {
        // tasks1 = tasks1.filter((el) => el.id !== id); //! используем useState для перерисовки 
        setTasks(filteredTask.filter((el) => el.id !== id));
    }




    // const filteredTask = tasks1.filter((el) => el.isDone)

    return (
        <div className="App">
            <Todolist title="What to learn"
                tasks={filteredTask}
                removeTask={removeTask}
                addTask={addTask}
                filterTask={filterTask}
            />
            {/* <Todolist title="Songs" tasks={tasks2} /> */}
        </div>
    );
}

export default App;
