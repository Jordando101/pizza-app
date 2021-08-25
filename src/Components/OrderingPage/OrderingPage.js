import React, {useState} from 'react';
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'
import {PizzaSizeDropdown} from "../DropdownMenu/PizzaSizeDropdown";
import {CrustTypeDropdown} from "../DropdownMenu/CrustTypeDropdown";
import {PizzaToppingsCheckboxes} from "../ToppingsAndOptions/PizzaToppingsCheckboxes";
import {pizzaCrusts, pizzaSizes, pizzaToppings} from '../../Utils/pizzaValues.js'


const OrderingPage = () => {
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
            <div><img id="pizzaIconId" src={pizzaLogoIcon}
                      className="logo"/></div>
            <div>
                <div id="pizzaSizeId">Pizza Size
                    <PizzaSizeDropdown handlePizzaSizeChange={(pizzaSizeValue) => setPizzaSize(pizzaSizeValue)}/>
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
            <div>Your Pizza So Far:</div>
            <br/>
            <div>
                {pizzaSize !== "" && pizzaSizes[pizzaSize]}
                {" "}
                {(pizzaCrust !== "" && pizzaCrusts[pizzaCrust])}
                {pizzaSize !== "" && pizzaCrust !== "" && pizzaTopping != "" && (" topped with ")}
                {pizzaTopping.map(
                    (topping)=>{
                        return(pizzaToppings[topping]+" ")
                    }
                )}
            </div>


        </div>
    )


}

export default OrderingPage;