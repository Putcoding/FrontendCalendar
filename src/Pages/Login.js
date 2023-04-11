import React from "react";
import {Navigate, Link} from "react-router-dom";
function Login(){
    const [goToCalendar, setGoToCalendar] = React.useState(false);

    if(goToCalendar){
        localStorage.setItem("login_key",1);
        return <Navigate to="/Calendar"/>
    }
    return(
        <main>

            <form>
                <header>
                    <h1>Student's Calendar</h1>
                    <Link><button className="aboutButton">about</button></Link>
                </header>
                <p>username:</p>
                <input type="text" placeholder="username" />
                <p>password:</p>
                <input type="password" placeholder="password"  />
                <p></p>
                <button className="loginButton" onClick={()=>{setGoToCalendar(true);}}>Login</button>
                <p>Not registered? Then <Link to="/Calendar">register here</Link></p>
                <p></p>
                <p></p>
                <button className="googleButton" onClick={()=>{setGoToCalendar(true);}}>Sign in with Google</button>
                
                
            </form>
        </main>
    )
}

export default Login;
