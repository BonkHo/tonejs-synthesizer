import React from "react";
import * as Tone from "tone";

const WhiteKey = (props) => {
    const synth = new Tone.Synth().toDestination();

    function playNote(note) {
        synth.triggerAttackRelease(`${note}4`, "8n");
    }

    return (
        <button className="white-key" onClick={() => playNote(props.note)}>
            {props.note}
        </button>
    );
};

export default WhiteKey;
