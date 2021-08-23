import React from 'react';
import pizzaLogoIcon from '../../assets/pizzaLogoIcon.png'


const OrderingPage = ()=> {
    return(
        <div>
            <div id="titleId">Rubin's Pizza</div>
            <div><img id="pizzaIconId" src = {pizzaLogoIcon}/></div>
            <div id = "pizzaSizeId">Size</div>
            <div id = "pizzaCrustTypeId">Crust Type</div>
            <div id = "pizzaToppingsId">Toppings</div>
        </div>
    )


}

export default OrderingPage;