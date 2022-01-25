import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import CounterAppTwo from "./components/CounterAppTwo";

const App = ({ history }: any) => {
  console.log("history", history)
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <div style={{ margin: "20px" }}>
              <div style={{ color: "blue", cursor: "pointer" }} onClick={() => history.push('/app2')}>Go to app 2</div>
            </div>
          </Route>
          <Route path="/app2">
            <div style={{ margin: "20px" }}>
              <div>APP-2</div>
              <div>
                <CounterAppTwo />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
