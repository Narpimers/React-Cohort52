import { useState } from "react";

function Challenge6() {


    const [offSetTop, setOffSetTop] = useState(1000);

    function handleButton() {
        setOffSetTop(offSetTop - 50)
        if (offSetTop === 0) {
           setOffSetTop(1000);
        }
    }
    

    return(
        <div className="challenge6">
            <button onClick={handleButton}>Move up</button>
            <div className="my-box" style={{transform: `translateY(${offSetTop}px)`}}></div>
        </div>
    )
    
}

export default Challenge6;