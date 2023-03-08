import React from 'react'
import Form from 'react-bootstrap/Form'
import './Helpline.css'
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
        <div className="col-md-3">
          <Form>
            <Form.Group className="col-12 col-md-3" controlId="name">
              <Form.Label></Form.Label>
              <Form.Control
                id="form_control"
                type="text"
                size="text"
                placeholder="Name"
              />
            </Form.Group>
          </Form>
        </div>
        <div>
          <Form>
            <Form.Group
              className="col-12 col-md-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label></Form.Label>
              <Form.Control
                id="form_control"
                type="email"
                size="text"
                placeholder="name@example.com"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Helpline
