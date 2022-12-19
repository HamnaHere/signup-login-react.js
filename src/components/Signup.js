import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Date, setDate] = useState("");
  

  const createUser = () => {
    const user = {
      name: Name,
      password: Password,
      email: Email,
      date: Date
     
    };
   
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((info) => console.log("Data Updated", info));
  };
  let Navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/login`; 
    Navigate(path);
  }


  return (
    <div className="Auth-form-container">
      

      <Form className="Auth-form">
        <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>


    
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            value={Name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password Here"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          />
        </Form.Group>

        
 
  



<Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Your Date of birth"
            onChange={(e) => setDate(e.target.value)}
            value={Date}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            createUser();
            routeChange()

          }}
        >
          Sign Up
        </Button>
        </div>
      </Form>
      </div>
    
  );


  // const changeSelection = (e)=>{
  //   setGender(e.target.value);
  }

  
export default SignUp;