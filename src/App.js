import React from "react";
import WhiteKey from "./components/WhiteKey";

function App() {
    return (
        <div className="App">
            <div className="keyboard">
                <WhiteKey note={"C"} />
                <WhiteKey note={"D"} />
                <WhiteKey note={"E"} />
                <WhiteKey note={"F"} />
                <WhiteKey note={"G"} />
                <WhiteKey note={"A"} />
                <WhiteKey note={"B"} />
            </div>
        </div>
    );
}

export default App;
