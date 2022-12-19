import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { json, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => navigate("/home");

  const [items, setItems] = useState([]);

  useEffect(() => {
    let nameString = localStorage.getItem("User")
    let name = JSON.parse(nameString);
    if (nameString!== null){
      navigate("/Home");
    }
  }, []);

  const createUser = async () => {
    console.log(Name, " ::", Password);
    await fetch("http://localhost:5000/users", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((info) => {
        console.log("Data Updated", info);
        info.map((e)=>{
          if(e.name === Name && e.password === Password){
            console.log("Login")
            localStorage.setItem("User", JSON.stringify(User));
            navigate("/Home");
          }

        })
      });
  };

  const User = {
    name: Name,
    password: Password,
  };



  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder={items.Name}
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder={items.Password}
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={createUser}
            >
              Login
            </button>
          </div>
          <p className="Create New User text-right mt-2">
            Create New User : <a href="./Signup">Sign Up Now</a>
          </p>
        </div>
      </form>
    </div>
  );
};
// <div>
//   <br />

//   {/* <Nav defaultActiveKey="/home" as="ul">
//   <Nav.Item as="li">
//     <Nav.Link href="/home">Home Page</Nav.Link>
//   </Nav.Item>
//   <Nav.Item as="li">
//     <Nav.Link href="/signup">Sign Up</Nav.Link>
//   </Nav.Item>
//   <Nav.Item as="li">
//     <Nav.Link href="/UserDetail">User Detail</Nav.Link>
//   </Nav.Item>
// </Nav> */}

//   {/* pasting code here  */}

//   <div className="container w-50 mt-5">
//     <h1 className="mt-5">Login </h1>

//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Your Name"
//           onChange={(e) => setName(e.target.value)}
//           value={Name}
//         />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password Here"
//           onChange={(e) => setPassword(e.target.value)}
//           value={Password}
//         />
//       </Form.Group>

//           <button type="button" className="btn btn-primary mb-3" onClick={createUser}>
//             Login
//           </button>

//         </Form>
//         <button className="btn btn-primary">
//           <a
//             style={{ textDecoration: "none", color: "white" }}
//             href="http://localhost:3000/signup"
//           >
//             {" "}
//             Register Now{" "}
//           </a>
//         </button>
//     //   </div>
//     // </div>
//   );
// };

export default Login;
