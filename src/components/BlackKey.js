import React from "react";
import * as Tone from "tone";

const BlackKey = (props) => {
    const synth = new Tone.Synth().toDestination();

    function playNote(note) {
        synth.triggerAttackRelease(`${note}4`, "8n");
    }

    return (
        <button className="black-key" onClick={() => playNote(props.note)}>
            {props.note}
        </button>
    );
};

export default BlackKey;
