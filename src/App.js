import './App.css';
import {useEffect, useState} from "react";
import {cos, round, sin} from "./utils";


function Man({ x, y, facing }) {
    return (
        <g transform={`translate(${x} ${y}) rotate(${facing} ${25} ${50})  `}>
            <rect width="50" height="100" stroke="green" strokeWidth="4" fill="yellow"/>
            <circle cx="30" cy="50" r="30" stroke="green" strokeWidth="4" fill="yellow"/>
        </g>
    );
}


function App() {

    const [x, setX] = useState(800);
    const [y, setY] = useState(500);
    const [step, setStep] = useState(10);
    const [facing, setFacing] = useState(0);

    useEffect(() => {
        function gameLoop() {
            // setX((x) => x + 1);
        }

        const id = setInterval(gameLoop, 10);
        return () => clearTimeout(id);
    }, []);


    function absolutePositioning(e) {
        if (e.key === 'd') {
            setX((x) => x + step);
        } else if (e.key === 'a') {
            setX((x) => x - step);
        } else if (e.key === 'w') {
            setY((y) => y - step);
        } else if (e.key === 's') {
            setY((y) => y + step);
        } else if (e.key === 'e') {
            setFacing((facing) => facing + step);
        } else if (e.key === 'q') {
            setFacing((facing) => facing - step);
        }
    }


    function subjectivePositioning(e) {
        if (e.key === 'd') {
            const yy = round(sin(facing + 90) * step);
            const xx = round(cos(facing + 90) * step);
            setX((x) => x + xx);
            setY((y) => y + yy);
        } else if (e.key === 'a') {
            const yy = round(sin(facing - 90) * step);
            const xx = round(cos(facing - 90) * step);
            setX((x) => x + xx);
            setY((y) => y + yy);
        } else if (e.key === 'w') {
            const yy = round(sin(facing) * step);
            const xx = round(cos(facing) * step);
            setX((x) => x + xx);
            setY((y) => y + yy);
        } else if (e.key === 's') {
            const yy = round(sin(facing + 180) * step);
            const xx = round(cos(facing + 180) * step);
            setX((x) => x + xx);
            setY((y) => y + yy);
        } else if (e.key === 'e') {
            setFacing((facing) => facing + step);
        } else if (e.key === 'q') {
            setFacing((facing) => facing - step);
        }
    }

    return (
        <div className="App" tabIndex={0} onKeyDown={subjectivePositioning}>

            <svg xmlns="http://www.w3.org/2000/svg">
                <Man x={x} y={y} facing={facing}/>
            </svg>

        </div>
    );
}

export default App;
