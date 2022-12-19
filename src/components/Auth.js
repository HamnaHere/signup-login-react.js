import { useEffect, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";

function Auth(props){

const [isLogin,setIsLogin] = useState(false);
const navigate = useNavigate();
useEffect(()=>{
    let nameString = localStorage.getItem("User")
    let name = JSON.parse(nameString);
    if (nameString!== null){
        setIsLogin(true);
    }
    console.log(name,typeof name);
},[])
return <>
{isLogin ? props.children : (
    <h4>
        {""}
        user not created please
        <Link to={"/SignUp"} > 
                Sign up first 
        </Link> 

    </h4>
)}


</>


}

export default Auth;