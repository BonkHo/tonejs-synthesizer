import React, { useState } from "react";
import * as Tone from "tone";
import BlackKey from "../components/BlackKey";
import WhiteKey from "../components/WhiteKey";

const Home = () => {
    const vol = new Tone.Volume(-12).toDestination();
    const osc = new Tone.Oscillator().connect(vol).start();
    const [muted, setMuted] = useState(false);

    const muteButton = () => {
        muted ? setMuted(true) : setMuted(false);
    };

    vol.mute = muted;

    return (
        <div className="App">
            <header>Keyboard</header>
            <div className="keyboard-container">
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
            <div className="volume-control-container">
                <div className="volume-control">
                    <button className="mute" onClick={muteButton}>
                        Mute
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
