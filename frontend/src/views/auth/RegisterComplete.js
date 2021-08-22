import React, {useState,useEffect} from 'react';
import {auth} from '../../firebase';
import {toast}  from 'react-toastify';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { createOrUpdateUser } from '../../functions/createUpdate';






const RegisterComplete = (props)=>{
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const createOrUpdateUser = async (authToken) => {
    //     console.log(process.env.REACT_APP_API)
    //     return await axios.post("http://localhost:8000/api/createupdateuser", {},
    //         {headers:{authToken}})
    // }

    useEffect(()=>{

        setEmail(window.localStorage.getItem("registerEmail", email))

    },[])

    
    const handleSubmuit = async (e) =>{
        e.preventDefault()

        if(!email || !password){
            toast.error("Email and Password is not provided")
        }

        if(password.length < 6){
            toast.error("Password length is less than six characters")
        }
        try{
            const result = await auth.signInWithEmailLink(email, window.location.href)

            
            console.log(result)

            if(result.user.emailVerified){
                //remove email from local storage
                window.localStorage.removeItem("registerEmail")
                //update password
                const user = auth.currentUser
                await user.updatePassword(password)
                const getIdTokenResult = await user.getIdTokenResult()
                //use redux
                
                // console.log(`user ${user.email} idToken ${getIdTokenResult.token}`)
                createOrUpdateUser(getIdTokenResult.token).then((res)=>{

                    dispatch({type:"LOGGED_IN_USER", payload:{email:user.email,
                         token:getIdTokenResult.token,
                            name: res.data.name,
                        picture: res.data.picture,
                        role:res.data.role}})
    
                }).catch(err =>{
                    console.log(err)
                })

                //redirect user
                props.history.push("/")
            }
        }
        catch(err){
            console.log("Error ",err)
        }
        // console.log(process.env.REACT_APP_REGISTER_EMAIL_URL)
    //    const  config = {
    //         url : process.env.REACT_APP_REGISTER_EMAIL_URL,
    //         handleCodeInApp:true
    //     }

        // await auth.sendSignInLinkToEmail(email, config);
        // toast.success(`Sign in link has been sent to ${email} please click to login`);

        // setEmail("");
        // console.log("success")
    }

    const formRegister = () => <form onSubmit={handleSubmuit}>
            <input disabled className={"form-control"} name={email} value={email} onChange={e=>setEmail(e.target.value)} type={'email'}  />
            <br/>
            <input placeholder="password" className={"form-control"} onChange={e=>setPassword(e.target.value)} type={'password'} autoFocus />

            <button className={"btn btn-raised"} type={"submit"}>Register Complete</button>
        </form>
    return (
    <div className={"container p-5"}>
        <div className={"row"}>
            <div className={"col-lg-6 offset-md-3"}>
                <h4>Register</h4>
                {formRegister()}
            </div>
        </div>
    </div>

    
    
    )
    
    }
export default RegisterComplete;