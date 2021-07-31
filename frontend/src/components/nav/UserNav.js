import React from 'react';
import {Link} from 'react-router-dom';

const UserNav = (prop) => {
    return (<nav className={""}>
        <ul className = {"nav flex-column"}>
            <li className={"nav-item"}>
                <Link to={"/user/suscriber"} className={"nav-link"}>
                    History
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to={"/update/password"}  className={"nav-link"}>
                    Update Password
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to= {"/wish/list"} className={"nav-link"}>
                    WishList
                </Link>
                </li>
        </ul>

    </nav>)


}

export default UserNav;


