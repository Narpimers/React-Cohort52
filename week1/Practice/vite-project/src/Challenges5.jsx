import { useState } from "react";

function Challenge5 () {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState();

    function handleNumber1(event) {
        setNumber1(event.target.value)
    }

     function handleNumber2(event) {
        setNumber2(event.target.value)
    }

    function handleButton() {
        setResult(Number(number1) + Number(number2))
    }

    return (
        
     

        <div className="challenge5">
            <h1>Add two numbers</h1>
            <input type="number" className="input1" value={number1} onChange={handleNumber1}/>
            <input type="number" className="input2" value={number2} onChange={handleNumber2}/>
            <br />
            <button onClick={handleButton}>Add Them!</button>
            <p>{result}</p>
        </div>
    )
};

export default Challenge5;