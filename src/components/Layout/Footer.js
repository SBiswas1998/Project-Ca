import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="foote-link">
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <div class="row">
                  <div class="col-md-5">
                    <h2>Quick links</h2>
                    <ul class="foot-link-list">
                      <li>
                        <a href="/service/registration/proprietorship">Registration</a>
                      </li>
                      <li>
                        <a href="/service/auditing">Auditing</a>
                      </li>
                      <li>
                        <a href="/service/IncomeTax/ITR_filing">Income Tax</a>
                      </li>
                      <li>
                        <a href="/service/book_keeper">Book Keeping</a>
                      </li>
                      <li>
                        <a href="/service/GST/GST_registration">GST</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h2>About Us</h2>
                    <ul class="foot-link-list">
                      <li>
                        <a class="" href="#">
                          Vision
                        </a>
                      </li>
                      <li>
                        <a class="" href="#">
                           Mission
                        </a>
                      </li>
                      <li>
                        <a class="" href="/privacy_policy">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <h2>Subscribe Now</h2>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter email address"
                  id=""
                  name=""
                  value=""
                />
                <input type="submit" class="btn btn-join" value="Subscribe" />
              </div>
              <div class="col-md-4">
                <h2>Connect With Us</h2>
                <ul class="call-ad">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;
                      <span>
                        {" "}
                        SCO 79, First Floor, Phase 11, Tarf Kumbra, Sahibzada
                        Ajit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Singh Nagar, Punjab 160062
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faPhone} /> &nbsp;
                    <a href="tel:+91 964-687-4599">+91 964-687-4599</a>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;&nbsp;
                    <a href="mailto:info@capka.co.in">info@capka.co.in</a>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class=" copy-right">
          <div class="container">
            <div class="row">
              <div class="col-md-7">
                <p>
                  © Purminder Kaur & Associates - All Rights Reserved.
                  {new Date().getFullYear()} Created by Purminder Kaur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
