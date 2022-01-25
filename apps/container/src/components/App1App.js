import { mount } from 'app1/CounterAppOne';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const App1App = () => {
    console.log("App1App App1App App1App App1App ", mount)
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                console.log("onNavigate App1App onNavigate App1App onNavigate App1App ", nextPathname)
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

export default App1App;