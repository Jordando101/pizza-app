import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import OrderingPage from "./Components/OrderingPage/OrderingPage";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
                <Route path ="/order">
                    <OrderingPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
