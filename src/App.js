import "./App.css";
import Homepage from "./components/homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Consult from "./components/consult/Consult";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/consult">
              <Consult />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
