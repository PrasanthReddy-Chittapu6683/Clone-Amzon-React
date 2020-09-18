import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CheckOut from './CheckOut';
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';

function App() {

  const promise = loadStripe('pk_test_51HRwtCEOgiWdEhAO8XWxnSZ6wYNVEHmNeaVE3e5Dkk0CBqvxyoJieKrDnkCQN114BQBBayXMtKcOKRmqq7UdL6XU005bHnDoJw')

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {

    }
  }, [])


  return (
    <Router>
      {/* My WhatsApp Chat Room */}
      {/* Hey Guys, Want to use your own chatting application for your own / business purpose same like Whats App web? */}

      <div className="app">

        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/checkout'>
            <Header />
            <CheckOut />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path=''>
            <Header />
            <Home />
          </Route>


        </Switch>
      </div>

    </Router>
  );
}

export default App;
