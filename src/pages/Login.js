import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, FormControl } from 'react-bootstrap'
import './Signup.scss'
import Logo from '../img/final-logo.svg'
import { useFormFields } from '../libs/hooksLib'
import firebase from '../base'
import { useAppContext } from '../libs/contextLib'

export default function Login() {
  const history = useHistory()
  const { userHasAuthenticated } = useAppContext()

  let willAuthenticate = true
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
    errorMessage: '',
  })

  function validateForm() {
    return fields.email.length > 4 && fields.password.length > 8
  }

  async function handleSubmit(event) {
    event.preventDefault()

    await firebase
      .auth()
      .signInWithEmailAndPassword(fields.email, fields.password)
      .catch(function (error) {
        fields.errorMessage = error.message
        willAuthenticate = false
      })
    if (willAuthenticate) {
      userHasAuthenticated(true)
      history.push('/')
    }
    try {
    } catch (e) {}
  }
  return (
    <div className="signup">
      <Form onSubmit={handleSubmit}>
        <img src={Logo} />
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <FormControl
            autoFocus
            type="email"
            placeholder="Enter email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <FormControl
            type="password"
            placeholder="Password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  )
}
