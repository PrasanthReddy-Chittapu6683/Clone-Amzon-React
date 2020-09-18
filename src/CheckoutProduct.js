import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();


    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <FlipMove>
            <div className="checkoutProduct">
                <img src={image} className="checkoutProduct_image" alt="" />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">

                        {Array(rating).fill().map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}

                    </div>
                    {!hideButton && (

                        <button onClick={removeFromBasket}>Remove from Basket</button>
                    )}

                </div>
            </div>
        </FlipMove>
    )
}

export default CheckoutProduct


// {
//     "id": "pi_1HSNSkEOgiWdEhAOt0QKsUgI",
//     "object": "payment_intent",
//     "amount": 5672,
//     "canceled_at": null,
//     "cancellation_reason": null,
//     "capture_method": "automatic",
//     "client_secret": "pi_1HSNSkEOgiWdEhAOt0QKsUgI_secret_SkAD42H1l8U0jCVgUY7ZQ7qcX",
//     "confirmation_method": "automatic",
//     "created": 1600350470,
//     "currency": "usd",
//     "description": null,
//     "last_payment_error": null,
//     "livemode": false,
//     "next_action": null,
//     "payment_method": "pm_1HSNTKEOgiWdEhAOqHRuufzD",
//     "payment_method_types": [
//       "card"
//     ],
//     "receipt_email": null,
//     "setup_future_usage": null,
//     "shipping": null,
//     "source": null,
//     "status": "succeeded"
//   }
