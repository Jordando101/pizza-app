import React from 'react'
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <div id="titleId">Rubin's Pizza</div>
            <div>
                <img id="pizzaIconId" src={pizzaLogoIcon}></img>
            </div>
            <div>
                <Link to="/order">
                    <button id="orderPizzaButtonId">Order a Pizza</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;