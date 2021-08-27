import React, {useState} from 'react';
import {auth} from '../../firebase';
import {toast}  from 'react-toastify';
import Logo from '../../components/layout/partials/Logo';






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
            <div className={"form-group"}>
            <input className={"form-control"} placeholder={"Your Email"} name={email} onChange={e=>setEmail(e.target.value)} type={'email'} autoFocus />
            </div>
            <button className={"btn btn-raised"} type={"submit"}>Register</button>
        </form>
    return (
    <div className={"container p-5"}>
        <div className={"row"}>
            <div className={"col-lg-5 offset-md-3 border p-3 shadow"}>
               <center> <Logo/> <h4>Register</h4></center>
                {formRegister()}
            </div>
        </div>
    </div>

    
    
    )
    
    }
export default Register;