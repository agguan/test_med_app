import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({ email: "", phoneNumber: "" });

  const validateEmail = (email) => {
    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // phone number validation (e.g., must be 10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (!validateEmail(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!validatePhoneNumber(phoneNumber)) {
      validationErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Proceed with form submission
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-text">
          Are you a new member? 
          <span>
            {/* <a href="../Sign_Up/Sign_Up.html" style={{ color: "#2190FF" }}>
              Sign Up Here
            </a> */}
            <Link to="/sign-up" style={{ color: "#2190FF" }}>
              Sign Up Here
            </Link>
          </span>
        </div>
        <br />
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="form-control"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && <small className="error">{errors.phoneNumber}</small>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                Login
              </button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => setErrors({})}>
                Reset
              </button>
            </div>
            <br />
            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
