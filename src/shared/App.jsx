import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import routes from './routes';
import css from './App.module.css';

const App = () => {
    return (
        <div>
            <Helmet
                defaultTitle="React SSR Starter – TypeScript Edition"
                titleTemplate="%s – React SSR Starter – TypeScript Edition"
            // link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
            />
            <h1>
                React + Express – SSR Starter
            </h1>
            <Switch>
                <Route exact path={routes.home} component={Home} />
                <Route render={() => '404!'} />
            </Switch>
            <h2>heading</h2>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/page-1">page 1</Link>
                </li>
                <li>
                    <Link to="/page-2">page 2</Link>
                </li>
            </ul>
        </div>
    );
};

export default App;
