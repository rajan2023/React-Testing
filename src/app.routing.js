import React ,{useEffect} from "react";
import { Route,Switch,Redirect,withRouter,useHistory } from 'react-router';
import Test from './pages/test';
import Login from './pages/login';
import SignUp from './pages/signUp';
import { useState } from "react/cjs/react.development";
import cogoToast from "cogo-toast";
const getToken=() =>{
    return localStorage.getItem('token');
}
const AppRouting = (props) =>{
    let history =useHistory();
    let token = getToken();
    const[p,setp] = useState([]);
    const [date,setDate] = useState(null);
    const addData = (e,d) =>{
        e.preventDefault();
        p.push(d);
        console.log(p);
      document.getElementById('form').reset();
        cogoToast.success("Add member success!");
      }
      const authenticate = (e,b) =>
      {
          console.log(p);
          e.preventDefault();
          let a = p.filter(g => g.userName?.toLowerCase()===b.userName?.toLowerCase() && g?.password == b?.password);
          if(a.length > 0){
              console.log(a[0]);
              setDate(a[0]?.date);
              localStorage.setItem('token','213123123');
              localStorage.setItem('date',a[0]?.date);
              history.push('/');
          }
        cogoToast.success("Login success!");
          document.getElementById('loginForm').reset();
      }
    if(token){
        return(
            <>
            <Route path="/" exact render={(props) =>(
                <Test {...props} date={date} />
            )} />
            <Redirect to="/"/>
            </>
        )
    }
    return(
        <Switch>
      <Route path="/" exact  render={(props) =>(
          <Login {...props} loginValue={authenticate} />
      )} />
      <Route path="/signup"  render={(props) =>(
          <SignUp submitProps={addData} {...props} />
      )} />
      </Switch>
      )
}
  
export default withRouter(AppRouting);