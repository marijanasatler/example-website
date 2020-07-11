import React from 'react';
import './contact.scss';
import Form from 'react-bootstrap/Form';



const Contact=()=>{
  return(
<div className='app-container'>
<div className='contact-container'>
<div className="grid_contact_item ">
				<h1 className='titles'>ADDRESS</h1>
				<h2>YOUR COMPANY NAME</h2>
				<h2>YOUR COMPANY ADDRESS </h2>
			    <h2>phone: xxx-xx-xx</h2>
				<h2>email: example@gmai.com</h2>
			</div>
<div className="grid_contact_item ">
  <h1 className='titles'>CONTACT US</h1>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address:</Form.Label>
    <Form.Control className='email-form' type="email" placeholder="Enter email" /> 
  
  </Form.Group>
  <Form.Group>
  <Form.Label>Your message:</Form.Label>
  <Form.Control className='message-form' size="lg" type="text" placeholder="Your message" />
</Form.Group>
<div className='subm-button' >
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <button className='mt2' variant="primary" type="submit"  >
    Submit
  </button>
</div>
</Form>
</div>
</div>
</div>

);}

export default Contact;

