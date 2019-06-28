import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';

import store from './store';
import { Header, Sidebar } from './components';
import * as pages from './views';


class App extends Component {

    render() {
        return (
            <Fragment>
                <GlobalStyle/>
                <Provider store={store}>
                    <HashRouter>
                        <Header/>
                        <Sidebar/>
                        <Switch>
                            <Route exact path="/" component={pages.Home}/>
                        </Switch>
                    </HashRouter>
                </Provider>
            </Fragment>
        )
    }

}

export default App;
