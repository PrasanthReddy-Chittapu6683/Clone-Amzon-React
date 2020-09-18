import React from 'react'
import './CheckOut.css'
import SubTotal from './SubTotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function CheckOut() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">

            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" />

                <div>
                    <h2 className="checkout__title">
                        {user?  <h3>Hello, {user?.email}</h3>:  <h3>Hello, Guest</h3> }
                       
                        Your Shopping Basket
                    </h2>
                    {
                        basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }

                </div>
            </div>
            <div className="checkout__right">
                <SubTotal />

            </div>

        </div>
    )
}

export default CheckOut
