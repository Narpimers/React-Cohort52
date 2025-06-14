import { useState } from "react";

function Challenge4() {
    const correctPhrase = "My phrase";
    const [phrase, setPhrase] = useState('');

    function handlePhrase(event) {
        setPhrase(event.target.value)

        if (event.target.value === correctPhrase) {
        alert('You are right!')
        return;
    }
    }

    
    
    return (
        <div className="challenge4">
            <p>What a secret phrase</p>
            <input type="text" onChange={handlePhrase} className="phrase"/>
            <p>Hint it's open sesame <span>{phrase}</span></p>
        </div>
    )
};

export default Challenge4; 