import React, {useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Menu, Avatar, Badge} from 'antd';
import { HomeFilled, SettingOutlined, LoginOutlined, UserOutlined, LogoutOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import firebase  from 'firebase'
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie'

const {SubMenu} = Menu;

const Header = ()=>{
    const [ct, setCt] = useState("")
    let {user, cart} = useSelector((state)=>({...state}))
    
    const history = useHistory()
    const dispatch = useDispatch()
    const [current, setCurrent] = useState('home');
    const handleClick = (e)=>{
      console.log(e)
      setCurrent(e.key)
    }

    useEffect(() => {
      if(Cookie.getJSON("cart") && Cookie.getJSON("cart").productList.length>0){
          setCt(Cookie.getJSON("cart").productList.length)}
      
      return () => {
        
      };
    }, [ct])


const logout = ()=>{
    firebase.auth().signOut()
    dispatch({
      type:"LOGGED_OUT_USER",
      payload: null
    })
    history.push("/login")

}



    return (
        <>
        <Menu className={"sticky-top"} onClick={handleClick} selectedKeys={[current]} mode={"horizontal"}>
        <Menu.Item key={"home"} icon={<HomeFilled /> }>
          <Link to={"/"} className="display-4">Fischela</Link>
        </Menu.Item>

        {!user && (<Menu.Item key={"register"} icon={<UserOutlined /> } className={"float-right"}>
        <Link to={"/register"}>Register</Link>
        </Menu.Item>)}

        {!user && (<><Menu.Item key={"login"} icon={<LoginOutlined /> } className={"float-right"}>
        <Link to={"/login"}>Login</Link>
        </Menu.Item>
        </>
    )}

        <Menu.Item key={"cart"} icon={<span onClick={e=>history.push("/add/to/cart")} className="avatar-item">
                                            <Badge count={ct}>
                                            <Avatar class="text-warning" shape="square" icon={<ShoppingCartOutlined />} />
                                            </Badge>
                                            </span> } className={"float-right"}>
        </Menu.Item>

        
        
       
        {user&&(<SubMenu key={"SubMenu"} className={"float-right"} icon={<SettingOutlined />} title={user && (user.email.split("@")[0])}>
          
            <Menu.Item key={"setting:2"}><Link to={"/admin/dashboard"}>Admin Dashboard</Link></Menu.Item>
            <Menu.Item icon={<LogoutOutlined />} onClick={logout}>LogOut</Menu.Item>
            <Menu.Item key={"cart"} icon={<span className="avatar-item">
                                            <Badge count={ct}>
                                            <Avatar shape="square" icon={<ShoppingCartOutlined />} />
                                            </Badge>
                                            </span> } className={"float-right"}>
        </Menu.Item>
    

        
          
        </SubMenu>
        
        )}

        
      </Menu>
        </>
    )
} 

export default Header;