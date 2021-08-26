import React from 'react'
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'

const OrderConfirmationPage = () => {
    return (
        <div>
            <h1 id="titleId" className="title">
                Rubin's Pizza
            </h1>
            <img id="pizzaIconId" src={pizzaLogoIcon} className="logo"/>
            <br/>
            <div className="sectionTitle">Order Placed!</div>
            <br/>
            <div className="sectionTitle">Please allow 30 - 60 minutes for delivery</div>

        </div>
    )


}

export default OrderConfirmationPage