import React from 'react'
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <h1 id="titleId" className="title">Rubin's Pizza</h1>
            <br/>
            <div>
                <img id="pizzaIconId" src={pizzaLogoIcon}
                     className="logo"></img>
                <br/>
            </div>
            <div>
                <Link to="/order">
                    <button id="orderPizzaButtonId" >Order a Pizza</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;