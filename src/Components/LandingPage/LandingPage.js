import React from 'react'
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <div id="titleId">Rubin's Pizza</div>
            <img id="pizzaIconId" src={pizzaLogoIcon}></img>
            <Link to="/order"><button id = "orderPizzaButtonId">Order a Pizza</button></Link>

        </div>
    )
}

export default LandingPage;