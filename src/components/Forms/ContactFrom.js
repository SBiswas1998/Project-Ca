import React, { useEffect, useState } from "react";
import contactimg from '../../assets/images/contact.jpg';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { contactUs } from "../../actions/auth";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const contactUsStatus = useSelector((state) => state.auth.contactUsStatus);
  console.log("contactUsStatus--------", contactUsStatus);

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    if (name === "" || phone === "" || text === "" || email === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid input',
      });
      return false;
    }
    if (!isValidEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address',
      });
      return;
    }

    const userData = {
      name: name,
      email: email,
      phone: phone,
      message: text,
    };
    dispatch(contactUs(userData));
  };

  useEffect(() => {
    if (contactUsStatus?.message) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: contactUsStatus?.message,
      });
      clearFormFields();
    }
  }, [contactUsStatus]);

  const clearFormFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setText("");
  };

  return (
    <section className="hm-contactus-sec">
      <Container>
        <Row>
          <Col lg={6} className="mt-s">
            <div className="contact_form">
              <Row>
                <Col md={12} className="hm-contactus-title">
                  <h2>Contact <span>With Us</span></h2>
                  <p>Please send us your query and we'll be happy to assist you</p>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Enter Phone Number *"
                      value={phone}
                      onChange={(e) => {
                        // Validate input using regex and update state
                        const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                        setPhone(value);
                      }}
                      pattern="[0-9]*" // Accept only numeric values
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Type your message here"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-send"
                    onClick={handleSignUp}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <figure className="image-wrap">
              <img src={contactimg} alt="" className="img-fluid" />
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
