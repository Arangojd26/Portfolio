import { React, useState } from "react";
import Home from "./app/pages/Home/Home.page";
import Works from "./app/pages/Works/Works.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./app/pages/About/About.page";

function App() {
  const [index, setIndex] = useState(0);

  return (
    <Router>
      <div className="o-bg">
        <Switch>
          <Route path="/" exact>
            <Home index={index} />
          </Route>
          <Route path="/works" exact>
            <Works setIndex={setIndex} />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
