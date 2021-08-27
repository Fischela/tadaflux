import React, {useEffect, useState} from 'react';
import {auth, googleAuthProvider} from '../../firebase';
import {toast}  from 'react-toastify';
import { Button,  } from 'antd';
import  {Link} from 'react-router-dom';



import {MailOutlined, LoadingOutlined , GoogleOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { createOrUpdateUser } from '../../functions/createUpdate';
import Logo from '../../components/layout/partials/Logo';





const Login = (props)=>{
    console.log(props)
    if (typeof props.location.state != 'undefined'){
        toast.success(props.location.state.msg)
    }
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)

    // const createOrUpdateUser = async (authToken) => {
    //     console.log(process.env.REACT_APP_API)
    //     return await axios.post("http://localhost:8000/api/createupdateuser", {},
    //         {headers:{authToken}})
    // }
    const properRedirect = (res) =>{
        console.log('INSIDE PROPER REDIRECT')
        console.log(res.data.role)

        if( typeof props.location.state != 'indefined'){
            if(props.location.state.role == 'cart')
            props.history.push("/add/to/cart")

        }else if(res.data.role == "subscriber"){
            props.history.push("/user/suscriber")

        }else if (res.data.role == "admin"){
            props.history.push("/admin/dashboard")

        }else{
        console.log("ELSE EXECUTED")
        props.history.push("/")

        }
        
       

    }
    useEffect(()=>{
        if (user && user.token){
            props.history.push("/user/suscriber")
        }

        return ()=>{}
    }, [user, props.history])


    const [email, setEmail] = useState('norbertmbafrank@gmail.com')
    const [password, setPassword] = useState('calister')
    const [loading, setLoading] = useState(false)

    const googleLogin = async () => {
        auth.signInWithPopup(googleAuthProvider).then(async(result)=>{
            const { user} = result
            const idToken = await user.getIdTokenResult
            createOrUpdateUser(idToken.token).then((res)=>{

                dispatch({type:"LOGGED_IN_USER", payload:{email:user.email,
                     token:idToken.token,
                        name: res.data.name,
                    picture: res.data.picture,
                    role:res.data.role}})
                 properRedirect(res)



            }).catch(err =>{
                console.log(err)
            })
            // props.history.push("/")
            toast.success("Login successful!")
        

        }).catch((error)=>{
            console.log(error)
            toast.error(error.message)
        })
    }
    const handleSubmuit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        // console.log("email", email, "password", password)
        try{
            const result = await auth.signInWithEmailAndPassword(email, password)
            const {user} = result
            const idTokenResult = await user.getIdTokenResult()
            createOrUpdateUser(idTokenResult.token).then((res)=>{

                dispatch({type:"LOGGED_IN_USER", payload:{email:user.email,
                     token:idTokenResult.token,
                        name: res.data.name,
                    picture: res.data.picture,
                    role:res.data.role}})

                    properRedirect(res)

                

            }).catch(err =>{
                console.log(err)
            })
            toast.success("Sign in Successful")
            // props.history.push("/")

        }
        catch(error){
            console.log(error.message)
            toast.error(error.message)
            setLoading(false)
        }
    }

    const formRegister = () => <form onSubmit={handleSubmuit}>
            <div className="form-group">
                <input className={"form-control"} 
                placeholder={"your email"} name={email} 
                onChange={e=>setEmail(e.target.value)} 
                value = {email}
                type={'email'} autoFocus /></div>

            
            <div className="form-group">
                <input className={"form-control"}
                 placeholder={"your password"} name={password}
                  onChange={e=>setPassword(e.target.value)}
                  value = {password}
                   type={'email'} /></div>

            <div className="form-group"><Button 
             type={"primary"}
             onClick={handleSubmuit}
             disabled = {!email || password.length < 6}
             shape = "round"
             block
             icon = {<MailOutlined/>}
             className = {"mb-1 col-lg-12 d-block"}
             >{loading?<LoadingOutlined />:"Login with email/password"}</Button>
             </div>

             <div className="form-group">
             <Button
             type={"danger"}
             onClick={googleLogin}
             shape = "round"
             block
             icon = {<GoogleOutlined/>}
             className = {"mb-1 col-lg-12 d-block"}
             >Google sign In</Button>
             </div>
             <Link to="/forgottenButton/password" className="h7 text-danger">Forgotten password?</Link><br/>
             <Link to="/forgottenButton/password" className="h7 text-danger">don't have an account?, <span className="text-primary">Create one</span></Link>

        </form>
    return (
    <div className={"container p-5"}>
        <div className={"row"}>
            <div className={"shadow col-lg-4 border p-3 offset-md-3"}>
               <center> <Logo/> <h4>Login</h4></center>
                {formRegister()}
            </div>
        </div>
    </div>

    
    
    )
    
    }
export default Login;