import React, { useEffect, useRef, useState } from 'react';


const Todolist = () => {

    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState({name: ""})
    const itemInput = useRef(null)
   
    useEffect(() => {
        const lsItems = JSON.parse(localStorage.getItem('items'))
            if (!lsItems) 
                localStorage.setItem('items', JSON.stringify(items))
             else 
                setItems(lsItems)
            
    },[])

    useEffect(() => {
        if(items.length > 0)
            localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const deleteItem = (idx) => {
        console.log(idx)
     setItems((items) => items.filter((_,index) => index !== idx))
    }

    const handleInput = (event) => { 
        // console.log(event.target.value)
        setNewItem({name: event.target.value})        
    }

    const addItem = (event) => {
        itemInput.current.value = ""
          // console.log(newItem.name)
          if(newItem.name !== "" ) { 
            setItems([...items, newItem])
            setNewItem({name: ""})
        } 
        }            
      
    return (
        <>
            <div className='container d-flex justify-content-center mt-5 mb-5'>
                <div className="card w-25 text-bg-light">
                    <div className='card-body'>
                        <h1 className='card-title'>Items</h1>
                        <input
                        id="input"
                        type="text"
                        onChange={handleInput}
                        ref={itemInput} 
                        />
                        <button 
                        className='ms-2 btn btn-success'
                        onClick={addItem} 
                        >
                            Add Item
                            </button>
                        <ul className='list-group'>
                            {items.length > 0
                                ? items.map((item, idx) => (
                                    <li key={idx} className='list-group-item'>{item.name}
                                        <button
                                            className='btn btn-danger ms-2'
                                            onClick={() => deleteItem(idx)}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))
                                : <p>No items found!</p>}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todolist;
