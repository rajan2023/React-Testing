import React,{useEffect} from "react";
import {Link} from "react-router-dom";
const Login =(props) =>{
    let b = {};
    const changeOfState = (e) =>{
        b[e.target.name] = e.target.value;
     }
     useEffect(() =>{
         fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(result => console.log(result.splice(0,5))).catch(err => console.log(err));

     })
return(
    <div>
    <form id="loginForm" onSubmit={(e) => props.loginValue(e,b)}>
    <p>Login page</p>
    <label for="luserName">User Name</label>
    <input id="luserName" type="text" name="userName" value={b?.userName} onChange={(e) =>changeOfState(e)}  placeholder="username1245" />
    <label for="lpassword">Password</label>
    <input type="password" id="lpassword" name="password" value={b?.password} onChange={(e) =>changeOfState(e)} placeholder="password" />
    <button type="submit">login</button>
    </form>
    <Link to="/signup">Signup Page</Link>
    </div>
    )
}
export default Login;