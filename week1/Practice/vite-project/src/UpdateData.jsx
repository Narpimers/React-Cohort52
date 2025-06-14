import { useState } from "react";

function UpdateDataFromInput() {
    const [name, setName] = useState("Ilias");
    const [age, setAge] = useState(26);

    return (
        <div className="my-input">
            <h1>Update data from an input </h1>
            <p>Display name: {name}</p>
            <p>Display Age: {age}</p>

            <h3>Name</h3>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />

            <h3>Age</h3>
            <input 
                type="number" 
                value={age}
                onChange={(e) => setAge(Number(e.target.value))} 
            />
        </div>
    )
}

export default UpdateDataFromInput;