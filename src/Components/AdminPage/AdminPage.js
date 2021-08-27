import React, {useState} from 'react'
import PizzaOrderListItem from "../PizzaOrderListItem/PizzaOrderListItem";

const AdminPage = () => {
    //no props! will only pull data from server

    const [orders, setOrders] = useState([])
    const [tableDisplay, setTableDisplay] = useState(false)

    const handleClickViewOrders = () => {
        console.log("view orders clicked/refreshed")
        setTableDisplay(true)
        fetch('http://localhost:8080/getOrders', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }).then(response => {
            console.log('Get Promise looks like: ' + response)
            //response is an array of Pizza objects
            return response.json()
        }).then(data => {
            console.log('response.json().then looks like: ' + data)
            setOrders(data)
        })


    }


    return (
        <div>
            <br/>
            <button className="adminButtons"
                    onClick={() => handleClickViewOrders()
                    }>Click to View Orders
            </button>
            <br/>
            <br/>
            <br/>

            {(tableDisplay &&
                <table >
                    <thead>
                    <tr>
                        <th colSpan="2">All Orders</th>
                    </tr>
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Pizza</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((pizza)=>{
                        return(
                        <PizzaOrderListItem
                            email = {pizza.email}
                            pizzaSize = {pizza.pizzaSize}
                            pizzaCrust = {pizza.pizzaCrust}
                            pizzaToppings = {pizza.pizzaToppings}
                        />
                        )
                    })

                    }
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default AdminPage