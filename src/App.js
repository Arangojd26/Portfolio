import Home from "./app/pages/Home/Home.page";
import Works from "./app/pages/Works/Works.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./app/pages/About/About.page";

function App() {
  return (
    <Router>
      <div className="o-bg">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/works" exact>
            <Works />
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
