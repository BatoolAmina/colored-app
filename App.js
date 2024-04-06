import React, {useState, useEffect} from "react";
function App()
{
    const [color, setColor] = useState();
    const click = color => {setColor(color)}
    useEffect(() => {
        document.body.style.backgroundColor = color}, [color])
    return(
        <div className="content">
            <button onClick={() => click('blue')}>Blue</button>
            <button onClick={() => click('green')}>Green</button>
            <button onClick={() => click('white')}>White</button>
            <button onClick={() => click('orange')}>Orange</button>
            <button onClick={() => click('yellow')}>Yellow</button>
            <button onClick={() => click('red')}>Red</button>
            <button onClick={() => click('pink')}>Pink</button>
            <button onClick={() => click('purple')}>Purple</button>
            <button onClick={() => click('black')}>Black</button><br/>
            <button onClick={() => click('white')}>Refresh</button>
        </div>
    );
}
export default App;