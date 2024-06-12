import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, verifyOtp } from "../../actions/auth";
import contactimg from "../../assets/images/QuickEnquiryImg.png";
import Swal from 'sweetalert2';

const QuickEnquiryForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [text, setText] = useState("");
  const [otp, setOTP] = useState("");
  const [userId, setUserId] = useState(null);

  const user_data = useSelector((state) => state.auth.user_data);
  const otpStatus = useSelector((state) => state.auth.otpStatus);
  const customerId =  localStorage.getItem('_id')
  // setUserId(customerId)

 const popupMessage = user_data?.message
  // setUserId(user_data?.data?._id);


  const handleSignUp = () => {
    if (name === "" || phone === "" || city === "") {
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
      city: city,
      text: text,
    };
    dispatch(registerUser(userData));
  };

  useEffect(() => {
    if (user_data?.message) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: user_data.message,
      });
    }
  }, [user_data]);

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleVerifyOtp =()=>{
    if (otp === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid input',
      });
      return false;
    }
     const userData = {
      otp: otp,
      name: name,
      email: email,
      phone: phone,
      city: city,
      text: text,
      _id: customerId,
    };
    dispatch(verifyOtp(userData))
    
  }


  useEffect(() => {
    if (otpStatus?.data?.message) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: otpStatus?.data?.message,
      });
      clearFormFields()
    }
  }, [otpStatus]);
  
  const clearFormFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setText("");
    setOTP("");
  };

  return (
    <section className="hm-contactus-sec">
      <Container>
        <Row>
        <Col lg={5}>
            <figure className="">
              <img
                src={contactimg}
                alt=""
                className="contact-image"
                // style={{ marginLeft: "0", marginTop: "16%" }}
              />
            </figure>
          </Col>
          <Col lg={7} className="mt-s">
            <div className="contact_form">
              <Row>
                <Col md={12}>
                  <h2>
                    Quick<span>Enquiry </span>
                  </h2>
                  <p className="text-center">
                    Please send us your query and we'll be happy to assist you
                  </p>
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
                <Col md={6}>
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

                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your City *"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      value={text}
                      rows={5}
                      placeholder="Type your message here"
                      onChange={(e) => setText(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                {!user_data.status === true && (
                  <Col xs={12} className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-send"
                    onClick={handleSignUp}
                  >
                    Continue
                  </Button>
                </Col>
               
                )}
                
                {user_data.status === true && (
                  <>
                    <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Enter your otp *"
                      value={otp}
                      onChange={(e) => setOTP(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                  <Col xs={12} className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-send"
                    onClick={handleVerifyOtp}   
                  >
                    Submit
                  </Button>
                </Col>
                  </>
                  
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuickEnquiryForm;
