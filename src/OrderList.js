import React from 'react'
import './OrderList.css'
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function OrderList({ order }) {
    return (
        <div className="orderList">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")} </p>
            <p className="orderList__id">
                <small><b>Order Id:</b> {order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    title={item.title}
                    id={item.id}
                    key={item.id}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    hideButton='false'
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="orderList__total">Order Total:{value}</h3>
                )}
                decimalSize={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}

export default OrderList
