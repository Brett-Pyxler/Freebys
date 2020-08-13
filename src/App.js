import React, { useState, useEffect } from 'react'
import './App.scss'
import Routes from './Routes'
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap'
import Home from './pages/Home'
import logo from './img/final-logo.svg'
import Signup from './pages/Signup'
import { AppContext } from './libs/contextLib'
import firebase, { db } from './base'
import { useHistory } from 'react-router-dom'

export default function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const history = useHistory()

  useEffect(() => {
    onLoad()
  }, [])

  async function onLoad() {
    try {
      let currentUser = firebase.auth().currentUser
      if (currentUser) {
        userHasAuthenticated(true)
      }
    } catch (e) {
      alert(e)
    }

    setIsAuthenticating(false)
  }

  function signOut(e) {
    e.preventDefault()
    firebase
      .auth()
      .signOut()
      .then(function () {
        userHasAuthenticated(false)
        history.push('/')
      })
  }

  return (
    <div className="App">
      <Navbar bg="light" variant="dark">
        <Navbar.Brand href="/">
          <img src={logo} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" to="/">
            Home
          </Nav.Link>
          <Nav.Link href="#features" to="/pages/features">
            Features
          </Nav.Link>
          <Nav.Link href="#pricing" to="/pages/features">
            Pricing
          </Nav.Link>
          <Nav.Link href="#/features/wishlist" to="/pages/features">
            Wishlist
          </Nav.Link>
          <Nav.Link href="#/referral" to="/pages/referral">
            Refer A Friend
          </Nav.Link>
        </Nav>
        <Nav>
          {isAuthenticated ? (
            <Nav.Link href="/" className="login-btn" onClick={signOut}>
              Logout
            </Nav.Link>
          ) : (
            <React.Fragment>
              <Nav.Link href="/signup" className="signup-btn">
                Signup
              </Nav.Link>
              <Nav.Link href="/login" className="login-btn">
                Login
              </Nav.Link>
            </React.Fragment>
          )}
        </Nav>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
      <div className="footer"></div>
    </div>
  )
}
