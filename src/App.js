import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
