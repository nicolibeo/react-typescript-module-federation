import React from "react";
import { Router, Route, Link } from "react-router-dom";
import CounterAppOne from "./components/CounterAppOne";

const App = ({ history }: any) => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact>
          <div style={{ margin: "20px" }}>
            <Link to="/app1">Go to app 1</Link>
          </div>
        </Route>
        <Route path="/app1">
          <div style={{ margin: "20px" }}>
            <div>APP-1</div>
            <div>
              <CounterAppOne />
            </div>
          </div>
        </Route>
      </Router>
    </div>
  );
};

export default App;
