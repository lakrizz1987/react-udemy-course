import { useState } from "react";

const Greeting = () => {

    const [changeText, setChangeText] = useState(false);

    function changeTextHandler() {
        setChangeText(true)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changeText && <p>Some text here!</p>}
            {changeText && <p>Changed!</p>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
};

export default Greeting;