import React from "react";
import { useState, useEffect } from "react";
import { json, useParams } from "react-router";
  function UserDetail () {
    const pageData =useParams();
    const [postDetails, setDetails] = useState({});

    function getPostDetails(){
      fetch("http://localhost:5000/users/")
      .then((res) => res.json())
      .then((json)=> {
        json.map((e)=>{
          console.log(e.id, " :: ",pageData.username )
          if(parseInt (pageData.username) ==  e.id )
          setDetails(e)
        })
        
      });
      console.log(json);
    }
    useEffect(()=>{
      getPostDetails();
    },[]);



    return (
      <div>
        <h6>
          UserDetails  {pageData.username} {postDetails.name} {postDetails.email} {postDetails.gender} {postDetails.date}
        </h6>
      </div>
    );



  }


  
  
export default UserDetail;
