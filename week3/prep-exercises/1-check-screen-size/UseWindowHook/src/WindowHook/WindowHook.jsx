import React, { useEffect, useState } from "react";



const useWindowSize = () => {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

    const handelResize = () => {
        setSize([window.innerHeight, window.innerWidth])
    };
    useEffect(() => {
        window.addEventListener("resize", handelResize)
    }, [])
    return size;
}

export default useWindowSize;