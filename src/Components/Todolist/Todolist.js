import React, { useEffect, useState } from 'react';
import "../Todolist/Todolist.css"

const Todolist = () => {

    const [toDo, setToDo] = useState(
        !localStorage.getItem('toDo') ? [] : JSON.parse(localStorage.getItem('toDo'))
    )
    const [newTask, setNewTask] = useState('')
    const [update, setUpdate] = useState('')

    useEffect(() => {
        let tasks = JSON.parse(localStorage.getItem('toDo'))
        if (tasks) {
            setToDo(tasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('toDo', JSON.stringify(toDo))
    }, [toDo])

    const addTask = () => {
        if (newTask) {
            let lastUsedId = 0
            if (toDo.length > 0) {
                const ids = toDo.map((task) => (task.id)).sort((a, b) => a.id > b.id)
                lastUsedId = ids[ids.length - 1]
            }

            let newId = lastUsedId + 1;
            let newEntry = { id: newId, title: newTask, status: false }
            setToDo([...toDo, newEntry]);
            setNewTask('');
        }
    }

    const deleteTask = (id) => {
        let newTasks = toDo.filter((task) => task.id !== id)
        setToDo(newTasks)
    }

    const markTask = (id) => {
        let newTasks = toDo.map((task) => {
            if (task.id === id) {
                return ({ ...task, status: !task.status })
            }
            return task
        })
        setToDo(newTasks)
    }

    const cancelUpdate = () => {
        setUpdate('')
    }

    const changeTask = (e) => {
        let newEntry = {
            id: update.id,
            title: e.target.value,
            status: update.status ? true : false
        }
        setUpdate(newEntry)
    }

    const updateTask = () => {
        let filtered = [...toDo].filter((task) => task.id !== update.id)
        let updateArray = [...filtered, update]
        setToDo(updateArray)
        setUpdate("")
        setNewTask("")
    }

    return (
        <>
            <div className='container'>
                <div className='mt-4 mb-4 d-flex flex-column align-items-center justify-content-center'>
                    <div>
                        <h3 className='mb-3'>To do List</h3>
                    </div>
                    {update && update ? (
                        <>
                            <div className='m-2 d-flex'>
                                <div>
                                    <input
                                        className='form-control'
                                        value={update && update.title}
                                        onChange={(e) => changeTask(e)}
                                    />
                                </div>
                                <div>
                                    <button
                                        className='ms-2 btn btn-success'
                                        onClick={updateTask}
                                    >
                                        update
                                    </button>
                                    <button
                                        className='ms-2 btn btn-warning'
                                        onClick={cancelUpdate}
                                    >
                                        cancel
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='m-2 d-flex'>
                                <div>
                                    <input
                                        className='form-control'
                                        onChange={(event) => setNewTask(event.target.value)}
                                        value={newTask}
                                    />
                                </div>
                                <div>
                                    <button
                                        className='ms-2 btn btn-success'
                                        onClick={addTask}
                                    >
                                        add task
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                    <div>
                        <ul>
                            {toDo && toDo.length ? '' : <p>No tasks...</p>}
                            {toDo && toDo
                                .sort((a, b) => a.id > b.id ? 1 : -1)
                                .map((task) => (
                                    <div
                                        key={task.id}
                                        className='d-flex justify-content-start align-items-center'>
                                        <li
                                            className={task.status ? 'list-group-item done' : 'list-group-item'}
                                        >
                                            {task.title}
                                        </li>
                                        <div>
                                            <button
                                                title='Complete / Not Complete'
                                                className='btn btn-warning m-1'
                                                onClick={(e) => markTask(task.id)}
                                            >
                                                mark
                                            </button>

                                            {task.status
                                                ? null
                                                : (
                                                    <button
                                                        title='Edit'
                                                        className='btn btn-primary m-1'
                                                        onClick={() => setUpdate({
                                                            id: task.id,
                                                            title: task.title,
                                                            status: task.status ? true : false
                                                        })}
                                                    >
                                                        change task
                                                    </button>
                                                )}
                                            <button
                                                title='Delete'
                                                className='btn btn-danger m-1'
                                                onClick={() => deleteTask(task.id)}
                                            >
                                                delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todolist;