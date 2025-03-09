import axios from "axios";
import React, { useState } from "react";
import "./Register.css"; // Import the CSS file


//part 1
console.log("yaha part 1\n");
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    password: "",
    gender: "Male",
    about: "",
  });

  console.log("yaha tak hogya hai\n");

  //part2

  console.log("part 2 bhi chal gya\n");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("part 2 done done done \n");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //do line maine add kiya hai
    console.log("🔹 handleSubmit function triggered");  // ✅ Check if function is called
    console.log("Sending data:", formData);  // ✅ Check form data before sending

    if (formData.name.length < 2) {
      alert("Name must be at least 2 characters");
      return;
    }
    if (Number(formData.age) < 0 || Number(formData.age) > 120) {
      alert("Age must be between 0 and 120");
      return;
    }
    if (formData.password.length < 10) {
      alert("Password must be at least 10 characters");
      return;
    }
    try {
      console.log("Enters API \n"); //maine add kiyua

      const response = await axios.post("http://localhost:5000/api/register", formData);

      console.log("Response:", response.data);  //maine add kiya


      alert(response.data.message);
    } catch (error) {
      // console.error("Registration error:", error);
      console.error("Registration error:", error.response ? error.response.data : error.message);
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>User Registration</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <input type="date" name="dob" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <select name="gender" onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <textarea name="about" placeholder="Tell us about yourself" maxLength="5000" onChange={handleChange}></textarea>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
