import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

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
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "ReactJS", isDone: false },
            { id: 4, title: "Redux", isDone: false }
        ]
    )

    // const filterTask = (name: string) => {
    //     setFilterValue(name)

    //     console.log(name);
    // }

    // let [filterValue, setFilterValue] = useState('All');

    // let filteredTask = tasks1;
    // if (filterValue === 'Active') {
    //     filteredTask = tasks1.filter((el) => el.isDone)
    // }
    // if (filterValue === 'Completed') {
    //     filteredTask = tasks1.filter((el) => !el.isDone)
    // }
    // if (filterValue === 'All') {
    //     filteredTask = tasks1;
    // }




    const removeTask = (id: number) => {
        // tasks1 = tasks1.filter((el) => el.id !== id); //! используем useState для перерисовки 
        setTasks(tasks1.filter((el) => el.id !== id));
    }




    // const filteredTask = tasks1.filter((el) => el.isDone)

    return (
        <div className="App">
            <Todolist title="What to learn"
                tasks={tasks1}
                removeTask={removeTask}

            />
            {/* <Todolist title="Songs" tasks={tasks2} /> */}
        </div>
    );
}

export default App;
