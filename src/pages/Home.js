import React from "react";
import BlackKey from "../components/BlackKey";
import WhiteKey from "../components/WhiteKey";

const Home = () => {
    return (
        <div className="App">
            <header>Keyboard</header>
            <div className="keyboard">
                <WhiteKey note={"C"} />
                <BlackKey note={"C#"} />
                <WhiteKey note={"D"} />
                <BlackKey note={"D#"} />
                <WhiteKey note={"E"} />
                <WhiteKey note={"F"} />
                <BlackKey note={"F#"} />
                <WhiteKey note={"G"} />
                <BlackKey note={"G#"} />
                <WhiteKey note={"A"} />
                <BlackKey note={"A#"} />
                <WhiteKey note={"B"} />
            </div>
        </div>
    );
};

export default Home;
