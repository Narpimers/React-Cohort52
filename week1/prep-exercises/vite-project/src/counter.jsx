import { useState } from "react";

function Count({ number }) {
    return <div className="counter">{number}</div>;
}

function Button({ onClick }) {
    return (
        <button onClick={onClick} className="counter-button">
            Add 1!
        </button>
    );
}

function Counter() {

    const [feedback, setFeedBack]= useState('Keep counting...');
    const [number, setNumber] = useState(0);

    function handleButtonClick() {
        setNumber(number + 1);
    }

    if (number > 10) {
        setFeedBack("It's higher than 10!")
    }

    return (
        <>
            <p>{feedback}</p>
            <Count number={number} />
            <Button onClick={handleButtonClick} />
        </>
    );
}

export default Counter;


// How would you implement a decrement button that lowers the count by 1? Would you make 2 different functions or would you add props to the component to handle the change in text?
// Once you can decrement as well, how would you implement it never going below 0?
// What would you need to change to also have a button that adds 2 and one that removes 2? Will that create a problem with your logic for never going below 0?