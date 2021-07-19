import { useState } from "react";

const UseStateWithArray = () => {

    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 8)
        }])
    }
    console.log("items = ", items);
    return(
        <>
            <button onClick={addItems}>Add Items</button>
            <ul>
                {
                    items.map(item => {
                        return <li key={item.id}>{item.value}</li>
                    })
                }
            </ul>
        </>
    )
}

export default UseStateWithArray;