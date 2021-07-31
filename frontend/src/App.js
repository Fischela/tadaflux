import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/nav/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import "react-toastify/dist/ReactToastify.css";
import RegisterComplete from './pages/auth/RegisterComplete';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import ForgottenPassword from './pages/auth/ForgottenPassword';
import { UserRoute } from './components/routes/UserRoutes';
import Suscriber from './pages/user/Suscriber';
import WishList from './pages/user/WishList';
import UpdatePassword from './pages/user/UpdatePassword';
import AdminDashboard from './pages/user/AdminDashboard';

import { currentUser } from './functions/currentUser';
import { AdminRoute } from './components/routes/AdminRoute';
import CreateCategory from './pages/admin/createCategory';
import EditCategory from './pages/admin/editCategory';
import CreateSubCategory from './pages/admin/subCategory';
import EditSub from './pages/admin/editSub';
import Product from './pages/admin/createProduct'
import "./index.css"
import EditProduct from './pages/admin/editProduct';
import ProductInfo from './pages/productInfo';
import Cart from './pages/cart';
import CheckOut from './pages/checkOut';

 



const App = (props)=>{
    const dispatch = useDispatch()
    // const createOrUpdateUser = async (authToken) => {
    //     console.log(process.env.REACT_APP_API)
    //     return await axios.post("http://localhost:8000/api/createupdateuser", {},
    //         {headers:{authToken}})
    // }
    useEffect(()=>{
        const unsuscribe = auth.onAuthStateChanged(async (user)=>{
            console.log(user)
            if(user){
            const idTokenResult = await user.getIdTokenResult()
                currentUser(idTokenResult.token).then((res)=>{
                    console.log('FROM THE APP JS SPECTRUM',res)
                    dispatch({
                        type:"LOGGED_IN_USER", payload:{email:user.email, token:idTokenResult.token, 
                            name: res.data.name,
                            picture: res.data.picture}
                    })
                }).catch((err)=>{
                    console.log(err)
                })
                
            }
            
        })

        return () => unsuscribe()
    },[])

    const ComingSoon = ()=>(
        <div className="container-fluid">
            <div className="row justify-content-center">
                
                <div className={"col-lg-12"}><img className={"img-fluid"} src={require("./images/comingSoon/Fischelaltd.png")}/></div>
                
                <div style={{position:"relative"}} className="col-lg-4 p-5 m-5 border blue-shadow">
                <center>Contact form!</center>
                <form  action={"mailto:fischelaltd@gmail.com"} method="post" enctype="text/plain">
                    <fieldset className="form-group">

                        <input placeholder="name" className="form-control" name="name" type="text"/>

                    </fieldset>
                    <fieldset className="form-group">
                    <textarea placeholder="Type in Your message..." className="form-control" name="mail" type="mail"></textarea>
                        
                    </fieldset>

                    <fieldset className="form-group">
                    <button className="btn btn-outline-info col-lg-12" name="mail" type="mail">Submit</button>
                        
                    </fieldset>
                </form>
                </div>
                </div>
                </div>
    )


    return (
    
    <div>
        {/* <Header/> */}

        <ComingSoon/>
        {/* <ToastContainer/> */}

        {/* <Switch>
        <Route path={"/"} component={Home} exact={true}/>
        <Route path={"/login"} component={Login} exact={true}/>
        <Route path={"/register"} component={Register} exact={true}/>
        <Route path={"/register/complete"} component={RegisterComplete} exact={true} />
        <Route path={"/forgotten/password"} component={ForgottenPassword} exact={true} />
        <Route path={"/product/info/:slug"} component={ProductInfo} exact={true} />
        <Route path={"/add/to/cart"} component={Cart} exact={true} />
        <Route path={"/checkout"} component={CheckOut} exact={true} /> */}




        {/* <UserRoute path={"/user/suscriber"} component={Suscriber} exact={true} /> */}
        {/* <UserRoute path={"/wish/list"} component={WishList} exact={true} />
        <UserRoute path={"/update/password"} component={UpdatePassword} exact={true} />
        <UserRoute path={"/user/suscriber"} component={Suscriber} exact={true} />
        <UserRoute path={"/user/suscriber"} component={Suscriber} exact={true} />

        <AdminRoute path={"/admin/dashboard"} component={AdminDashboard} exact={true} />
        <AdminRoute path={"/create/category"} component={CreateCategory} exact={true} />
        <AdminRoute path={"/edit/category/:slug"} component={EditCategory} exact={true} />
        <AdminRoute path={"/create/sub"} component={CreateSubCategory} exact={true} />
        <AdminRoute path={"/edit/sub/:slug"} component={EditSub} exact={true} />
        <AdminRoute path={"/create/product"} component={Product} exact={true} />
        <AdminRoute path={"/edit/product/:slug"} component={EditProduct} exact={true} /> */}






        






        {/* </Switch> */}
    </div>

    
    
    )
    
    }
export default App