import React from 'react'
import {pizzaSizes, pizzaCrusts, pizzaToppings} from "../../Utils/pizzaValues";

const PizzaOrderListItem = (props)=>{
return(
    <tr>
        <td>{props.email}</td>
        <td>{pizzaSizes[props.pizzaSize] + " " +
        pizzaCrusts[props.pizzaCrust] + " topped with "+
        props.pizzaToppings.map((toppings)=>{
            return (pizzaToppings[toppings]+"")
        })}</td>

    </tr>
)
}

export default PizzaOrderListItem