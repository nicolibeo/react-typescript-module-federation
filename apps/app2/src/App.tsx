import React from 'react';
import { Router, Route } from 'react-router-dom';
import CounterAppTwo from './components/CounterAppTwo';

const App = ({ history }: any) => {
  return (
    <div>
        <Router history={history}>
            <Route path="/">
            <div style={{ margin: '20px' }}>
              <div>APP-2</div>
              <div>
                <CounterAppTwo />
              </div>
            </div>
            </Route>
        </Router>
    </div>
  );
};

export default App;
