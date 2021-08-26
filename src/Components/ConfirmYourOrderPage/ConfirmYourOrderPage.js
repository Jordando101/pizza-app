import React from 'react'
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'
import {pizzaCrusts, pizzaSizes, pizzaToppings} from "../../Utils/pizzaValues"
import {Link} from "react-router-dom";

const ConfirmYourOrderPage = (props) => {
    return (
        <div>
            <h1 className="title" id="titleId">Rubin's Pizza</h1>
            <img id="pizzaLogoId" src={pizzaLogoIcon} className="logo"/>
            <br/>
            <br/>
            <div id="yourPizzaId" className="sectionTitle">Your Pizza:</div>
            <br/>
            <div>
                {pizzaSizes[props.pizzaSize] + " " +
                pizzaCrusts[props.pizzaCrust] + " topped with" +
                props.pizzaTopping.map(
                    (topping) => {
                        return (" " + pizzaToppings[topping])
                    }
                )}</div>
            <br/>
            <br/>
            <div>
                <form>
                    <label for="emailInputId" id="emailId">Enter Email to Place Order</label>
                    <br/>
                    <br/>
                    <input type="email"
                           id="emailInputId"
                           placeholder="YourName@RubinsPizza.com" required></input>
                    <div><br/></div>
                    <Link to="/orderConfirmationPage">
                        <input type="submit" value="Finish Ordering!"
                               onClick={() => {
                                   //put in the HTTP request to submit
                               }}/>
                    </Link>
                </form>
            </div>
        </div>
    )

}

export default ConfirmYourOrderPage