import React, { useEffect, Fragment, Children } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import ReactGA from 'react-ga';

const Routes = () => {
    return (
        <Router>
            {renderNavLinks()}
            <PageTracker>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </PageTracker>
        </Router>
    )
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

const renderNavLinks = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

const PageTracker = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        ReactGA.set({ page: pathname });
        ReactGA.pageview(pathname);
    }, [pathname])

    return <Fragment>{children}</Fragment>
}

export default Routes