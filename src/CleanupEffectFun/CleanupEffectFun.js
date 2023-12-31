
import './style.css';
import { useState,useEffect } from "react";
export default function CleanupEffect() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    
    const [show, setShow] = useState(true)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }
    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindoTracker />}
        </div>
    )
}

function WindoTracker() {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}