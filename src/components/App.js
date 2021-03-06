import React, {Component, Fragment} from 'react';
import '../App.css';
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Categories from "./Categories";

const Home = () => <h1>Home</h1>
const WillMatch = () => <h1>Matched!</h1>

const NoMatch = ({location}) => (
    <div>
        <h3>
            No match for <code> {location.pathname}</code>
        </h3>
    </div>
)

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="App">
                        <div>
                            <Navbar/>
                            <Categories/>
                            <Route path='/' exact component={Dashboard}/>
                            <Route path='/:category/:id' exact component={PostPage}/>
                            <Switch>
                                <Route path='/new' exact component={NewPost}/>
                                <Route path='/:category' exact component={Dashboard}/>
                            </Switch>
                        </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default App;
