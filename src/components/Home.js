import React, { useState } from "react";
// import UserDetail from "./UserDetail";

import { useEffect } from "react";
import { json, Link, useNavigate  } from "react-router-dom";

const getLocalItmes = () => {
  let list = localStorage.getItem('');

  
  if (list) {
      return JSON.parse(localStorage.getItem(''));
  } else {
      return [];
  }
}
const Home = () => {
  const [items, setItems] = useState(getLocalItmes());
  const [json, setJson] = useState(null);
  function display() {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((e) => (setJson(e)));
        
  }
  useEffect(()=>{
    display()
  },[]);
  console.log(json)

  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("User")
    navigate('/')
  };
  const handleClick1 = () => {
    localStorage.removeItem("User")
    navigate('/EditProfile')
  };

  

  // Delete item 

    
//   function componentDidMount () {
//     // Simple DELETE request with fetch
//     fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
//         .then(() => this.setState({ status: 'Delete successful' }));
// }

const deleteItem = (index) => {
  console.log(index)
  const updateditems = items.filter((i) => {
      return index !== i.id;
  });
  setItems(updateditems);

}

  
 
  return (
    <div>
       <div className="bg-light" style={{width:"100%",position:"absolute"}}>
        <div className="container bg-light">
          <table className="table mt-5 shadow-lg table-striped table-hover text">
            <thead>
            <tr>
            <th scope="col">#</th>
              <th scope="col">User Names</th>
              <th scope="col">User Details</th>
              <th scope="col">Delete Users</th>

            </tr>
            </thead>
            <tbody id="table">
              {json && json?.map((i) => (
                  <tr key={i.id}>
                  <th scope="row">{i.id}</th>
                  <td>{i.name}</td>
                  <td>


                    <a href={"http://localhost:3000/userdetail/"+i.id} onClick={display}
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer">
                      Click Details
                    </a>
                  </td>
                  <td><button className="btn btn-danger"   onClick={() => deleteItem(i.id)}> Delete User</button> </td>
                </tr>
              ))} 


            </tbody>
          </table>
          <button  className="btn btn success" style={{background:"blue",color:'white'}} onClick={handleClick}>Log out</button>
          <button  className="btn btn success ms-3" style={{background:"blue",color:'white'}} onClick={handleClick1}>Edit Profile</button>
  
        </div>

       </div>
    </div>
  );
};

export default Home;
