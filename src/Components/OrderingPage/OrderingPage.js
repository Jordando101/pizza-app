import React, {useState} from 'react';
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'
import {PizzaSizeDropdown} from "../DropdownMenu/PizzaSizeDropdown";
import {CrustTypeDropdown} from "../DropdownMenu/CrustTypeDropdown";
import {PizzaToppingsCheckboxes} from "../Checkboxes/PizzaToppingsCheckboxes";
import {pizzaCrusts, pizzaSizes, pizzaToppings} from '../../Utils/pizzaValues.js'
import {Link} from "react-router-dom";


const OrderingPage = (props) => {
    const [pizzaSize, setPizzaSize] = useState("")

    const [pizzaCrust, setPizzaCrust] = useState("")

    const [pizzaTopping, setPizzaTopping] = useState([])

    const handlePizzaToppingChange = (toppingName) => {
        if (pizzaTopping.includes(toppingName)) {
            setPizzaTopping(pizzaTopping.slice().filter(
                (pizzaToppingInArray) => {
                    return (toppingName != pizzaToppingInArray)
                }))
        } else {
            let tempArray = pizzaTopping.slice()
            tempArray.push(toppingName)
            setPizzaTopping(tempArray)
        }
    }
    
    return (
        <div>
            <h1 id="titleId" className="title">Rubin's Pizza</h1>
            <div>
                <img id="pizzaIconId" src={pizzaLogoIcon}
                     className="logo"/>
            </div>
            <br/>
            <div>
                <div id="pizzaSizeId">Pizza Size
                    <PizzaSizeDropdown handlePizzaSizeChange={(pizzaSizeValue) => {
                        setPizzaSize(pizzaSizeValue)
                        // pizzaToBeOrdered.size=pizzaSizeValue
                    }}/>
                </div>
            </div>
            <br/>
            <div id="pizzaCrustTypeId">Crust Type
                <CrustTypeDropdown handlePizzaCrustChange={(pizzaCrustValue) => setPizzaCrust(pizzaCrustValue)}/>
            </div>
            <br/>
            <div id="pizzaToppingsId">Toppings
                <PizzaToppingsCheckboxes handlePizzaToppingChange={
                    (pizzaToppingsValue => handlePizzaToppingChange(pizzaToppingsValue))}/>
            </div>
            <br></br>
            <div className="orderConfirmation">Your Pizza So Far:</div>
            <br/>
            <div>
                {(pizzaSize == "" && pizzaCrust == "") ? "No Pizza Built yet..." : (pizzaSize !== "" && pizzaSizes[pizzaSize])}
                {" "}
                {(pizzaCrust !== "" && pizzaCrusts[pizzaCrust])}
                {pizzaSize !== "" && pizzaCrust !== "" && pizzaTopping != "" && (" topped with ")}
                {pizzaTopping.map(
                    (topping) => {
                        return (pizzaToppings[topping] + " ")
                    }
                )}
            </div>
            <br/>
            <div>
                <Link to="/confirmYourOrder">
                    <button id="confirmYourOrderButtonId"
                            onClick={() => {
                                props.handlePizzaSelected(pizzaSize, pizzaCrust, pizzaTopping)

                            }
                            }> Finished Building My 'Za!
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default OrderingPage;