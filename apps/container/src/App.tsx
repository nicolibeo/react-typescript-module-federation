import { createBrowserHistory } from "history";
import React, { lazy, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
const App2Lazy = lazy(() => import("./components/App2App"));
//@ts-ignore
// import CounterAppTwo from 'app2/CounterAppTwo';
//@ts-ignore
// import CounterAppOne from 'app1/CounterAppOne';

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/">
        <div style={{ margin: "20px" }}>
          <React.Suspense fallback="Loading header...">
            <div
              style={{
                border: "1px dashed black",
                height: "50vh",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>CONTAINER</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    marginRight: "2rem",
                    padding: "2rem",
                    border: "1px dashed black",
                  }}
                >
                  <h2>APP-1</h2>
                  {/* <CounterAppOne /> */}
                </div>
                <div style={{ border: "1px dashed black", padding: "2rem" }}>
                  <h2>APP-2</h2>
                  <Suspense fallback="loading...">
                    <App2Lazy />
                  </Suspense>
                </div>
              </div>
            </div>
          </React.Suspense>
        </div>
      </Route>
    </Switch>
  </Router>
);
