import React, {useState} from 'react';
import {auth} from '../../firebase';
import {toast}  from 'react-toastify';
import {Button} from 'antd';






const ForgottenPassword = (props)=>{
    const [email, setEmail] = useState('')
    const [loading, setLoading]  = useState(false)

    const config = {
        url:process.env.REACT_APP_RESET_PASSWORD_LINK,
        handleCodeInApp:false
    }

    const resetPassword = async (e) =>{
        e.preventDefault()

        await auth.sendPasswordResetEmail(email, config).then(()=>{
            toast.success( `Password Reset email has been sent! to ${email}.`)
        }).catch(error=>{
            toast.error("Error Encountered: ", error)

        })
        


    }
    
    
    
    return <>
        <div className="container col-md-6 offset-md-3 p-5">
            
            <center><h4>Password Reset</h4></center>
            <div className={"form-group"}>
                <input autoFocus className = {'form-control'} type={"email"} onChange={e=>setEmail(e.target.value)} />

            </div>
            <Button onClick={resetPassword} type={"info"} block shape={"round"} disabled={!email}>{loading?"loadind...":"Reset Password"}</Button>
        
        </div>

    </>
    
    
    
    
    }
export default ForgottenPassword;