import React from 'react';
import {Link} from 'react-router-dom';

const AdminNav = (prop) => {
    return (<nav className={""}>
        <ul className = {"nav flex-column"}>
            <li className={"nav-item"}>
                <Link to={"/create/category"} className={"nav-link"}>
                    Category
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to={"/update/password"}  className={"nav-link"}>
                    Password
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to= {"/wish/list"} className={"nav-link"}>
                    Users
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to= {"/create/sub"} className={"nav-link"}>
                    Sub-Category
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to= {"/create/product"} className={"nav-link"}>
                    Products
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to= {"/wish/list"} className={"nav-link"}>
                    Shipping
                </Link>
                </li>
        </ul>

    </nav>)


}

export default AdminNav;


