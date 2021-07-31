import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { LoadingToRedirect } from './LoadingToRedirect';
import { toast } from 'react-toastify';
import axios from 'axios'


export const AdminRoute = ({children, ...rest}) =>{
    
    const user = useSelector(state=>state.user)
    console.log("THis IS THE ADMIN ROUT", user)
    const [OK, setOK] = useState(false)


    const dispatch = useDispatch()

    
    console.log(process.env.REACT_APP_API)
    useEffect(()=>{
        if (user && user.token){
        const authToken = user.token
        console.log(authToken)
        
        axios.post("http://192.168.43.88:8000/api/adminuser", {},
        {headers:{authToken}}).then(res=>{
        console.log("ADMIN ROUTE",res)
        
        
        setOK(true)

        }).catch(err=>{
            setOK(false)
            toast.error(err)
        })
    }
    })
    
        
        
        
        
    
    return OK?
    <Route {...rest} render= {()=> children} />:
    <div><LoadingToRedirect/></div>
}

