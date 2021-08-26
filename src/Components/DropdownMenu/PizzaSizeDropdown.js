import React from 'react'

import {pizzaSizes} from "../../Utils/pizzaValues";

export function PizzaSizeDropdown(props) {

    return (
        <select name="pizzaSize" id="size-select"
                onChange={
                    (event) =>
                        props.handlePizzaSizeChange(event.target.value)}>
            <option value="">--Choose Size of Pizza--</option>

            {Object.keys(pizzaSizes).map( (size) =>{
                return(
                    <option id={'pizza-select-option-' + size} value ={size}>
                        {pizzaSizes[size]}
                    </option>
                )
            })}

            {/*<option value="small">Small</option>*/}
            {/*<option value="medium">Medium</option>*/}
            {/*<option value="large">Large</option>*/}
            {/*<option value="extraLarge">Extra Large</option>*/}
        </select>
    )
}