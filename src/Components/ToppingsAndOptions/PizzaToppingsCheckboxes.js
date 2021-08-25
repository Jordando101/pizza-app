import React from 'react'
import {pizzaToppings} from "../../Utils/pizzaValues";

export function PizzaToppingsCheckboxes(props) {
    return (
        <div>
            <div>
                {Object.keys(pizzaToppings).map(
                    (topping) => {
                        return (
                            <div>
                                <input type="checkbox"
                                       id={topping}
                                       onClick={
                                           (event) =>
                                               props.handlePizzaToppingChange(event.target.id)}
                                />
                                <label for={topping}>
                                    {pizzaToppings[topping]}
                                </label>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}