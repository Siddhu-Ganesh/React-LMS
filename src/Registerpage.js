import { Link } from "react-router-dom";
import validator from 'validator';
import { useState } from "react";



function Register(){
    const[email,setEmailError]=useState(' ');

    const validateEmail = (e) => {
        var email = e.target.value
    
        if (validator.isEmail(email)) {
            setEmailError(' ')
        } else {
            setEmailError('Enter valid Email!')
        }
    };

    return(
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-md-4 text-center m-5 bg-white" style={{position:"relative",left:"360px"}}>
                <img src="https://lms.digital-lync.com/assets/logo.ab024049.png" className="mt-5" alt="digital-lyc-pic"/>
                   
                    <p className="mt-4"><big ><big>Welcome</big></big></p>
                    <small>Log in to Digital Lync to continue to Digita Lync  <br/> LMS.</small>

                    <form>
                        <input type="text" name="email" placeholder="Email address" onChange={(e) => validateEmail(e)} className="mt-4" style={{width:"250px",height:"45px"}}/><br/>
                        <input style={{width:"250px",height:"45px"}} type="text" name="email" placeholder="Password" className="mt-3 mb-3"/>
                    </form>

                    <a className="" style={{color:"#23719e",marginLeft:"-120px",textDecoration:"none",cursor:"pointer"}}>Forgot Password?</a> <br/>

                  <Link to={'/Mainpage'}>  <button className="bg-primary m-4 text-white" style={{width:"250px",height:"45px"}}>Continue</button></Link>
                    

                </div>

            </div>

        </div>
    )
}
export default Register;