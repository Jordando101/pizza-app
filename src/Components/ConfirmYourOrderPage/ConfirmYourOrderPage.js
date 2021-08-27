import React, {useState} from 'react'
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'
import {pizzaCrusts, pizzaSizes, pizzaToppings} from "../../Utils/pizzaValues"
import {Link} from "react-router-dom";

const ConfirmYourOrderPage = (props) => {

    const [email, setEmail] = useState("")

    const submitInfo = (size, crust, toppings, email) => {
        console.log("submitInfo called")
        let body = JSON.stringify({
            //Store the keys to the database; so the values
            //below are the keys to the pizzaValues JSON objects
            pizzaSize: size,
            pizzaCrust: crust,
            pizzaToppings: toppings,
            email: email
        })
        console.log("body made" + body)
        fetch('http://localhost:8080/newOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            console.log('Success: ', data)
        })
    }


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
                           placeholder="YourName@RubinsPizza.com"
                           onChange={(e) => setEmail(e.target.value)}
                           required></input>
                    <div><br/></div>
                    <Link to="/orderConfirmationPage">
                        <input type="submit" value="Finish Ordering!"
                               onClick={() => {
                                   //put in the HTTP request to submit
                                   submitInfo(props.pizzaSize, props.pizzaCrust, props.pizzaTopping,email)
                               }}/>
                    </Link>
                </form>
            </div>
        </div>
    )

}

export default ConfirmYourOrderPage