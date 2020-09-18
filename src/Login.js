import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
function Login() {
    const history = useHistory();

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [LoginError, setLoginError] = useState('')

    const SingInClick = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(Email, Password).then(
            (authResp) => {
                if (authResp) {
                    history.push('/')
                }
            })
            .catch((err) => {
                setLoginError(err)
            })
    }

    const registerClick = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(Email, Password).
            then((authResp) => {
                alert(authResp)
                console.log(authResp);
                if (authResp) {
                    history.push('/')
                }
            }).
            catch((err) => {
                // alert(err);
                setLoginError(err)
              
            })
    }


    return (
        <div className="login">
            <Link to='/'>
                <img className="login__image" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>
            <div className="login__container">
                <div>
                    {LoginError.message ?
                        <h4 className="login__errornotify">{LoginError.message} <span className="login__closeError" onClick={e => setLoginError('')}>X</span></h4>


                        : null}

                </div>
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={Email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={Password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__signInButton" onClick={SingInClick}>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's FAKE Clone Conditions of Use and Privacy Notice.
                </p>
                <button onClick={registerClick} className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
