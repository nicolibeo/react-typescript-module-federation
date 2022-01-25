import { createBrowserHistory } from "history";
import React, { lazy, Suspense } from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
const App1Lazy = lazy(() => import("./components/App1App"));
const App2Lazy = lazy(() => import("./components/App2App"));

const history = createBrowserHistory();

export default () => (
  <div style={{ margin: "20px" }}>
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
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <React.Suspense fallback="Loading header...">
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
                  <Suspense fallback="loading...">
                    <App1Lazy />
                  </Suspense>
                </div>
                <div style={{ border: "1px dashed black", padding: "2rem" }}>
                  <Suspense fallback="loading...">
                    <App2Lazy />
                  </Suspense>
                </div>
              </div>
            </React.Suspense>
          </Route>
          <Route path="/app1">
            <Suspense fallback="loading...">
              <App1Lazy />
            </Suspense>
          </Route>
          <Route path="/app2">
            <Suspense fallback="loading...">
              <App2Lazy />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  </div>
);
