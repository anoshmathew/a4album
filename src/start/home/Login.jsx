import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';


function Login(param) {
    const url = "http://localhost/magicevents/api.php?apicall=login";
    const navigate = useNavigate();
   
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    

    function submit(e) {
        e.preventDefault();

        Axios.post(url, {
            username: data.username,
            password: data.password,
        },{headers:{
            
        }}).then((res) => {
           
            localStorage.setItem("log", JSON.stringify(res));
            var log = JSON.parse(localStorage.getItem("log"));
            console.log(log);
            
            param.setUsernameAuth(log.data.user.username);
           
            switch(log.data.user.username){
                case 'ano1':
                   
                    navigate("user/ano1");
                   
                    break;
                case 'ano2':
                    navigate("user/ano2");
                    break;
                
            }
        });
        console.log(data.username +", "+ data.password);
    
    }
        
    
    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }
    return (
        <div className="AA">
        <div className="Form_Page">

            <div className="Container" id="container">
		<div className="Form-Container log-in-container">
			<form className="Login_Form" onSubmit={(e) => submit(e)}>
				<h1 className="Login_h1">Login</h1>
				<div className="social-container">
					<a href="#" className="social"><i className="fa-brands fa-facebook-f fa-2x" ></i></a>
					<a href="#" className="social"><i className="fa-brands fa-google fa-2x" ></i></a>
				</div>
				<span className="Login_Span">or use your account</span>
				<input className="Login_Input"
                    type="text" 
                    onChange={(e) => handle(e)}
                    id="username"
                    value={data.username}
                    placeholder="Username" />
				<input className="Login_Input" 
                    type="password"  
                    id="password"
                    onChange={(e) => handle(e)}
                    value={data.password}
                    placeholder="Password" />
				<a className="Login_Forgot_Password_Link" href="#">Forgot your password?</a>
				<button className="Login_Button" type="submit">Log In</button>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
				<div className="overlay-panel overlay-right">
					<h1>a4album.com</h1>
					<p className="Login_P">This login form is created using pure HTML and CSS. For social icons, FontAwesome is used.</p>
				</div>
			</div>
		</div>
	</div>

            
       
        </div>
        </div>
    )
}

export default Login