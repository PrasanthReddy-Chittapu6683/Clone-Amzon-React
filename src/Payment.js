import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getTotalCartAmount } from './reducer';
import axios from './axios'
import { useHistory } from 'react-router-dom'
import { db } from './firebase';


function Payment() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [Processing, setProcessing] = useState("")
    const [Error, setError] = useState(null)
    const [Disabled, setDisabled] = useState(true)
    const [Succeeded, setSucceeded] = useState('')
    const [clientSecret, setClientSecret] = useState(true)

    const handlePaymentSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // Payment Confirmation
            if (user) {

                db.collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id).set({
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created
                    })

            }


            setSucceeded(true);
            setError(null)
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }
    const handlePaymentChange = e => {
        debugger
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }
    useEffect(() => {
        // generate the specual stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            debugger;
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencties subunits (like paise, cents etc..)
                url: `/payments/create?total=${getTotalCartAmount(basket) * 100}`
            });
            debugger;

            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()

    }, [basket])
    console.log('THE SECRET IS >>>>>', clientSecret);
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Check <Link to='/checkout'> {basket?.length} items</Link>
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Details</h3>

                    </div>
                    <div className='payment__address'>
                        <p>  {user?.email} </p>
                        <p>123 React Lane</p>
                        <p>HSR Layout, Bangalore, India</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                title={item.title}
                                id={item.id}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>

                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handlePaymentSubmit}>
                            <CardElement onChange={handlePaymentChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total:{value}</h3>
                                    )}
                                    decimalSize={2}
                                    value={getTotalCartAmount(basket)}
                                    displayType={'text'}
                                    thousandandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={Processing || Disabled || Succeeded}>
                                    <span>
                                        {Processing ?
                                            <p>Processing</p> : 'Buy Now'
                                        }
                                    </span>
                                </button>
                            </div>
                            {Error && <div>{Error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
