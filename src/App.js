import React, {useState} from 'react'
import LandingPage from "./Components/LandingPage/LandingPage";
import OrderingPage from "./Components/OrderingPage/OrderingPage";
import ConfirmYourOrderPage from "./Components/ConfirmYourOrderPage/ConfirmYourOrderPage"
import AdminPage from "./Components/AdminPage/AdminPage"

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import OrderConfirmationPage from "./Components/OrderConfirmationPage/OrderConfirmationPage";


function App() {
    // const [pizzaToBeOrdered, setPizzaToBeOrdered] = useState({});
    // //want format to be JSON {size:"size", crust:"crust", toppings:[topping1,topping2,...]
    // const handlePizzaToBeOrderedChange = (pizza) =>{
    //
    // }
    const [pizzaSize, setPizzaSize] = useState("")

    const [pizzaCrust, setPizzaCrust] = useState("")

    const [pizzaTopping, setPizzaTopping] = useState([])


    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
                <Route path="/order">
                    <OrderingPage
                        handlePizzaSelected={(size, crust, topping) => {
                            setPizzaSize(size)
                            setPizzaCrust(crust)
                            setPizzaTopping(topping)
                        }}/>
                </Route>
                <Route path="/confirmYourOrder">
                    <ConfirmYourOrderPage
                        pizzaSize={pizzaSize}
                        pizzaCrust={pizzaCrust}
                        pizzaTopping={pizzaTopping}
                    />
                </Route>
                <Route path="/orderConfirmationPage">
                    <OrderConfirmationPage/>
                </Route>
                <Route path="/admin">
                    {//this manually needs to be directed for now
                    }
                    <AdminPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
