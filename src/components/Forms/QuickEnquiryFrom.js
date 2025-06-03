import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, verifyOtp } from "../../actions/auth";
import contactimg from "../../assets/images/QuickEnquiryImg.png";
import Swal from "sweetalert2";

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
  const customerId = localStorage.getItem("_id");
  console.log("customerId",customerId)
  
  console.log("otpStatus",otpStatus)

  const popupMessage = user_data?.message;
  // setUserId(user_data?.data?._id);

  const handleSignUp = () => {
    if (name === "" || phone === "" || city === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid input",
      });
      return false;
    }
    if (!isValidEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address",
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
        icon: "success",
        title: "Success",
        text: user_data.message,
      });
    }
  }, [user_data]);

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleVerifyOtp = () => {
    if (otp === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid input",
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
    dispatch(verifyOtp(userData));
    clearFormFields()
  };

  useEffect(() => {
    if (otpStatus?.data?.message) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: otpStatus?.data?.message,
      });
      clearFormFields();
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
          <Col lg={7} className="mt-s">
            <div className="contact">
              <h3>Quick Contact</h3>
              <h4>Contact us today, and get reply with in 24 hours!</h4>
              <fieldset>
                <input
                  placeholder="Your name"
                  type="text"
                  tabindex="1"
                  required
                  autofocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Email Address"
                  type="email"
                  tabindex="2"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Phone Number"
                  type="tel"
                  tabindex="3"
                  required
                  value={phone}
                  onChange={(e) => {
                    // Validate input using regex and update state
                    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                    setPhone(value);
                  }}
                  pattern="[0-9]*"
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your city"
                  type="text"
                  tabindex="1"
                  required
                  autofocus
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Type your Message Here...."
                  tabindex="3"
                  required
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </fieldset>

              {user_data.status === true && (
                <>
                  <fieldset>
                    <input
                      placeholder="Enter your OTP"
                      type="text"
                      tabindex="1"
                      required
                      autofocus
                      onChange={(e) => setOTP(e.target.value)}
                    />
                  </fieldset>
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                      onClick={handleVerifyOtp}
                    >
                      Submit
                    </button>
                  </fieldset>
                </>
              )}

              {!user_data.status === true && (
                <fieldset>
                  <button
                    name="submit"
                    type="submit"
                    id="contact-submit"
                    data-submit="...Sending"
                    onClick={handleSignUp}
                  >
                    Continue
                  </button>
                </fieldset>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuickEnquiryForm;
