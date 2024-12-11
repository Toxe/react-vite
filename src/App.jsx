import { useState } from "react";

export default function App() {
    const [counter, setCounter] = useState(5);

    return (
        <div>
            <h1>Vite + React</h1>
            <div>
                Counter = {counter}
            </div>
            <div>
                <button type="button" onClick={() => setCounter(counter - 1)}>-</button>
                <button type="button" onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <div>
                <a href="https://vite.dev/guide/">based on Vite Getting Started</a>
            </div>
        </div>
    );
}
