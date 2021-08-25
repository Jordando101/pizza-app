import React from 'react'
import {pizzaCrusts} from '../../Utils/pizzaValues.js'

export function CrustTypeDropdown(props){

    return(
        <select name="pizzaCrust" id = "crust-select"
        onChange = {(event)=>
        props.handlePizzaCrustChange(event.target.value)}
        >
            <option value="">--Choose Pizza Crust--</option>

            {Object.keys(pizzaCrusts).map(
                (crust)=>{
                    return(
                        <option value={crust}>
                            {pizzaCrusts[crust]}
                        </option>
                    )
                }
            )}

        </select>
    )
}