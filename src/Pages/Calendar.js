import React from "react";
import {Navigate} from "react-router-dom";


function Calendar(){

    const [goToLogin, setGoToLogin] = React.useState(false);

    if(goToLogin || localStorage.getItem("login_key")==="0"){
        window.localStorage.setItem("login_key",0);
        return <Navigate to="/"/>
    }

    return (
        <main>
            <form className="Calendar">
                <p>you are logged in!</p>
                <button className="loginButton" onClick={()=>{setGoToLogin(true);}}>logout</button>
            </form>
        </main>
    );
}

export default Calendar;
