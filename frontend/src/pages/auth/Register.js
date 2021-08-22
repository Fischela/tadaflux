import React, {useState} from 'react';
import {auth} from '../../firebase';
import {toast}  from 'react-toastify';






const Register = (props)=>{

    const [email, setEmail] = useState('')
    const handleSubmuit = async (e) =>{
        e.preventDefault()
        // console.log(process.env.REACT_APP_REGISTER_EMAIL_URL)
       const  config = {
            url : process.env.REACT_APP_REGISTER_EMAIL_URL,
            handleCodeInApp:true
        }

        await auth.sendSignInLinkToEmail(email, config);
        toast.success(`Sign in link has been sent to ${email} please click to login`);

        window.localStorage.setItem("registerEmail", email)
        setEmail("");
        console.log("success")
    }

    const formRegister = () => <form onSubmit={handleSubmuit}>
            <input className={"form-control"} placeholder={"Your Email"} name={email} onChange={e=>setEmail(e.target.value)} type={'email'} autoFocus />
            <br/>
            <button className={"btn btn-raised"} type={"submit"}>Register</button>
        </form>
    return (
    <div className={"container p-5"}>
        <div className={"row"}>
            <div className={"col-lg-6 offset-md-3"}>
               <center> <h4>Register</h4></center>
                {formRegister()}
            </div>
        </div>
    </div>

    
    
    )
    
    }
export default Register;