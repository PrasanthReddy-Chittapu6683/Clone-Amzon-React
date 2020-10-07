import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import './Orders.css'
import OrderList from './OrderList'
import { useStateValue } from './StateProvider'

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();

    const [orders, setOrders] = useState([])
    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snap =>
                    (setOrders(
                        snap.docs.map(doc => (
                            {
                                id: doc.id,
                                data: doc.data()
                            }
                        ))
                    ))
                )
        }
        else {
            setOrders([])
        }
    }, [user])
    return (
        <div className="orders">
            <div className="orders__borders">
                <h1> Your Orders</h1>
                {/* <input type="text" style="
    float: right;
    margin-top: -77px;
    margin-right: 31px;
    width: 322px;
    height: 30px;
"> */}
                <div className="order__order">
                    {
                        orders?.map(order => (
                            <OrderList key={order.id} order={order} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Orders
