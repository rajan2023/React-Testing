import React from "react";
import {Link} from "react-router-dom";
const Signup =(props) =>{
    let p = {};
    const changeTerms = (e) =>{
    p[e.target.name]= e.target.value;   
    }
return(
    <div>
    <form id="form" onSubmit={(e) => props.submitProps(e,p)}>
    <p>Signup page</p>
    <label for="firstName">first Name</label>
    <input type="text" id="firstName" name="firstName" value={p?.firstName} onChange={(e) =>changeTerms(e)} placeholder="first name" />
    <label for="lastName">last Name</label>
    <input type="text" id="lastName" name="lastName" value={p?.lastName} onChange={(e) =>changeTerms(e)} placeholder="last name"/>
    <label for="entryFee">Entry Fee</label>
    <input type="number" id="entryFee" name="entryFee" placeholder="entry fee" value={p?.entryFee} onChange={(e) =>changeTerms(e)} />
    <label for="date">Date</label>
    <input type="date" id="date" required name="date" placeholder="date" value={p?.date} onChange={(e) =>changeTerms(e)} />
    <label for="userName">User Name</label>
    <input type="text" id="userName" required  name="userName" placeholder="username1245" value={p?.userName} onChange={(e) =>changeTerms(e)} />
    <label for="password">Password</label>
    <input type="password" id="password" required name="password" placeholder="password" value={p?.password} onChange={(e) =>changeTerms(e)} />
    <button type="submit">Create one</button>
    </form>
<Link to="/" >Login Page</Link>
    </div>)
}
export default Signup;