import React,{useEffect} from "react";
import {useHistory} from "react-router-dom";
import {MainText} from './test.style';
const Test=(props) =>{
    let history = useHistory();
    const logout = () =>{
        localStorage.clear();
        history.push('/');
    }
    const trailLeft = () =>{
        let a= props.date;
        a = new Date(a);
        var dt = new Date();
        dt.setDate( dt.getDate() - 15 );
        if(a.toLocaleDateString() === new Date().toLocaleDateString() || a.getTime() >= new Date().getTime()){
            console.log('Not Started');
            return 15;
        }
        if(a.getTime() > dt.getTime()){
            console.log('intrial');
         return Math.floor((new Date().getTime() - a.getTime())/(1000*3600*24));;
        }
        if(a.getTime() <= dt.getTime()){
            console.log('expired');
            return 0;
        }
    }
return(
    <div>
        <button onClick={logout}>Logout</button>
        <MainText>{trailLeft()} Day remaining</MainText>
        <MainText data-testid="resultofdate">({trailLeft() === 0 ? "Expired":trailLeft() === 15 ?"Not Started":"Intrail"})</MainText>
    </div>
)
}
export default Test;