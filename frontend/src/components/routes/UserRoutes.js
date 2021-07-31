import React from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { LoadingToRedirect } from './LoadingToRedirect';


export const UserRoute = ({children, ...rest}) =>{
    const user = useSelector(state=>state.user)

    return user && user.token?
    <Route {...rest} render= {()=> children} />:
    <div><LoadingToRedirect/></div>
}

