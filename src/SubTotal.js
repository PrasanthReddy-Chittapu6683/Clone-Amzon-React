import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './SubTotal.css'
import { useStateValue } from './StateProvider'
import { getTotalCartAmount } from './reducer';
import { useHistory } from 'react-router-dom'
function SubTotal() {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items):
                    <strong>{`${value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />This order contains gift
                </small>
                </>
            )}

                decimalSize={2}
                value={getTotalCartAmount(basket)}
                displayType={'text'}
                thousandandSeparator={true}
                prefix={'$'}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
