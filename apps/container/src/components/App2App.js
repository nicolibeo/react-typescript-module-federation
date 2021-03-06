import { mount } from 'app2/CounterAppTwo';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const App2App = () => {
    console.log("App2App App2App App2App App2App ")
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                console.log("onNavigate App2App onNavigate App2App onNavigate App2App ", nextPathname)
                const { pathname } = history.location;
                if(pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });
        history.listen(onParentNavigate);
    }, []);
    
    return <div ref={ref}/>;
};

export default App2App;