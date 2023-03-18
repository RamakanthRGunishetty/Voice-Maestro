import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import './Helpline.css'
import logo from '../images/trump.png'
import { FaAddressCard } from 'react-icons/fa'

const Helpline = () => {
  return (
    <div className="Helpline" id="Helpline">
      <div className="help">
        <span id="fa-address">
          <FaAddressCard />
        </span>{' '}
        Helpline
      </div>
      <br />
      <div className="col-md-6">
        <div className="Social">
          <span className="info">
            <h4>Info</h4>
            Music is generally defined as the art of arranging sound to create
            some combination of form, harmony, melody, rhythm or otherwise
            expressive content.
          </span>
        </div>
        <Form className="form">
          <div className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label></Form.Label>
              <Form.Control id="form_control" type="text" placeholder="Name" />
            </Form.Group>

            <img src={logo} alt="Logo" className="logo" />
            <Form.Group controlId="formGridEmail">
              <Form.Label></Form.Label>
              <Form.Control
                id="form_control"
                type="email"
                placeholder="Email"
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formGridSubject">
            <Form.Label></Form.Label>
            <Form.Control id="form_control" type="text" placeholder="Subject" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label></Form.Label>
            <Form.Control
              id="form_control"
              as="textarea"
              rows="3"
              placeholder="Type your message"
            />
          </Form.Group>

          <div className="mb-3">
            <Form.Group controlId="formGridSubmit">
              <Form.Label></Form.Label>
              <Form.Control
                id="form_control_submit"
                type="submit"
                value={'Send'}
              />
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Helpline
