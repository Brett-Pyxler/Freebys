import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Landing.scss'
import Logo from '../img/final-logo-white.svg'
import { useFormFields } from '../libs/hooksLib'
import jsonp from 'jsonp'

export default function SubscribeForm() {
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    company: '',
    name: '',
  })

  console.log(process.env)

  const [errorMessage, setMessage] = useState('')
  const [successMessage, setSuccess] = useState(false)

  function validateForm() {
    return (
      fields.email.length > 4 &&
      fields.business.length > 2 &&
      fields.name.length > 0
    )
  }

  function handleSubmit(e) {
    e.preventDefault()

    const path = `${e.target.action}&EMAIL=${fields.email}&MMERGE3=${fields.company}&FNAME=${fields.name}`
    const url = path.replace('/post?', '/post-json?')
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/

    sendData(url)
  }
  function sendData(url) {
    jsonp(url, { param: 'c' }, (err, data) => {
      console.log(data)
      setMessage(data.msg)
      if (data.result === 'success') {
        setSuccess(true)
      }
    })
  }

  return (
    <div className="landing">
      <div className="hero">
        <img src={Logo} alt="Freebys" className="logo" />
        <p>Coming this holliday season..</p>
      </div>
      <div className="subscribe-container">
        <div className="form-container">
          {successMessage ? (
            <h2 className="display-message">
              {errorMessage}! Someone will be in touch soon!
            </h2>
          ) : (
            <React.Fragment>
              <Form
                className="landing-form mc-embedded-subscribe-form"
                action="https://pyxler.us17.list-manage.com/subscribe/post?u=2ebdd1bb7a7b54452eec723d4&amp;id=6b82306c17"
                method="POST"
                onSubmit={handleSubmit}
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate
              >
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleFieldChange}
                    name="EMAIL"
                    className="required email"
                    id="email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Business</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Some Awesome Company"
                    onChange={handleFieldChange}
                    name="MMERGE3"
                    id="company"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Contact Person</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First & Last Name"
                    onChange={handleFieldChange}
                    name="FNAME"
                    className="required"
                    id="name"
                  />
                </Form.Group>
                <Form.Group>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ color: 'red' }}
                    >
                      {errorMessage}
                    </div>
                    <div className="response" id="mce-success-response"></div>
                  </div>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                >
                  Submit
                </Button>
                <script
                  type="text/javascript"
                  src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
                ></script>
              </Form>
            </React.Fragment>
          )}
        </div>
        <div className="mission-statement">
          <p>
            List on Freebys.com Review and Launch marketplace. Reach thousands
            of customers and influencers in your niche for reviews.
          </p>
        </div>
      </div>
      <div className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <p>Amazon, Woocommerce, Shopify All-Inclusive Review System</p>
          </div>
          <div className="feature-item">
            <p>Unlimited Reviews (subject to change)</p>
          </div>
          <div className="feature-item">
            <p>Customer e-mail capture for direct marketing</p>
          </div>
          <div className="feature-item">
            <p>ToS compliant</p>
          </div>
          <div className="feature-item">
            <p>...and many more</p>
          </div>
        </div>
      </div>
    </div>
  )
}
