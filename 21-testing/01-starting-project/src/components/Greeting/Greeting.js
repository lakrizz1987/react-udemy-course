import { useState } from "react";
import Output from "../Output/Output";

const Greeting = () => {

    const [changeText, setChangeText] = useState(false);

    function changeTextHandler() {
        setChangeText(true)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changeText && <Output>Some text here!</Output>}
            {changeText && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
};

export default Greeting;