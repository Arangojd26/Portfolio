import Home from "./app/pages/Home/Home.page";
import Works from "./app/pages/Works/Works.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
