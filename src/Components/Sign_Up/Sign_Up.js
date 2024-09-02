// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import './Sign_Up.css';

// const Sign_Up = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: ""
//   });

//   const [errors, setErrors] = useState({
//     phone: "",
//     email: ""
//   });

//   const validateEmail = (email) => {
//     //  email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePhone = (phone) => {
//     // phone number validation (e.g., 10 digits)
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phone);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;

//     const newErrors = { phone: "", email: "" };

//     if (!validatePhone(formData.phone)) {
//       newErrors.phone = "Please enter a valid 10-digit phone number.";
//       valid = false;
//     }

//     if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//       valid = false;
//     }

//     setErrors(newErrors);

//     if (valid) {
//       // Proceed with form submission (e.g., send data to backend)
//       console.log("Form submitted", formData);
//     }
//   };

//   return (
//     <div className="container" style={{ marginTop: "5%" }}>
//       <div className="signup-grid">
//         <div className="signup-text">
//           <h1>Sign Up</h1>
//         </div>
//         <div className="signup-text1" style={{ textAlign: "left" }}>
//           Already a member?
//           <span>
//             {/* <a href="../Login/Login.html" style={{ color: "#2190FF" }}>
//               Login
//             </a> */}
//             <Link to="/login" style={{ color: "#2190FF" }}>
//               Login
//             </Link>
//           </span>
//         </div>
//         <div className="signup-form">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 required
//                 className="form-control"
//                 placeholder="Enter your name"
//                 aria-describedby="helpId"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 id="phone"
//                 required
//                 className="form-control"
//                 placeholder="Enter your phone number"
//                 aria-describedby="helpId"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//               />
//               {errors.phone && (
//                 <small className="error-text" style={{ color: "red" }}>
//                   {errors.phone}
//                 </small>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 required
//                 className="form-control"
//                 placeholder="Enter your email"
//                 aria-describedby="helpId"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//               {errors.email && (
//                 <small className="error-text" style={{ color: "red" }}>
//                   {errors.email}
//                 </small>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 required
//                 className="form-control"
//                 placeholder="Enter your password"
//                 aria-describedby="helpId"
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="btn-group">
//               <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
//                 Submit
//               </button>
//               <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
//                 Reset
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign_Up;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Sign_Up.css';

const Sign_Up = () => {
  const [formData, setFormData] = useState({
    role: "",  // Added role property
    name: "",
    phone: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    phone: "",
    email: ""
  });

  const validateEmail = (email) => {
    //  email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // phone number validation (e.g., 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    const newErrors = { phone: "", email: "" };

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Proceed with form submission (e.g., send data to backend)
      console.log("Form submitted", formData);
    }
  };

  // Define role options
  const roles = ["Admin", "User", "Moderator", "Guest"];

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: "left" }}>
          Already a member?
          <span>
            <Link to="/login" style={{ color: "#2190FF" }}>
              Login
            </Link>
          </span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                name="role"
                id="role"
                required
                className="form-control"
                aria-describedby="helpId"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="">Select a role</option>
                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && (
                <small className="error-text" style={{ color: "red" }}>
                  {errors.phone}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <small className="error-text" style={{ color: "red" }}>
                  {errors.email}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                Submit
              </button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;

