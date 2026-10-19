import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <hr className="footer-line" />
      <div className="footer-box">
        <div className="footer-top">
          <div className="footer-contact">
            <a className="footer-email" href="">
              customersupport@ovroe.com
            </a>
            <a className="footer-phone" href="">
              702-462-7281
            </a>
            <p className="footer-address">
              9550 S Eastern Ave ste 253-A102 Las Vegas NV 89123
            </p>
          </div>

          <div className="footer-about">
            <h4 className="footer-title">About Us</h4>
            <h4 className="footer-title">Contact Us</h4>
            <h4 className="footer-title">Shipping Info</h4>
            <h4 className="footer-title">Returns Info</h4>
          </div>

          <div className="footer-policies">
            <h4 className="footer-title1">Terms of Service</h4>
            <h4 className="footer-title1">Refund policy</h4>
            <h4 className="footer-title1">Privacy policy</h4>
            <h4 className="footer-title1">Cookies</h4>
          </div>
        </div>
        <div className="footer-newsletter">
          <h2 className="newsletter-title">Subscribe to our newsletter</h2>

          <div className="newsletter-form">
            <input
              className="newsletter-input"
              type="email"
              placeholder="E-mail"
            />
            <h2>Ok</h2>
          </div>
          <div>
            <img className="newsletter-line" src="/images/line.png" alt="" />
          </div>
        </div>
      </div>
      <div className="footer-botom">
        <h2 className="copy">Copyright © 2021, OVROE - Online Fashion</h2>
        <h2 className="insta">Instagram</h2>
        <h2 className="face">Facebook</h2>
      </div>
    </div>
  );
}
