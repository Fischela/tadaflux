import React, { useState, useEffect, useRef } from 'react';
import AdminNav from '../../components/nav/AdminNav'
import { deleteProduct, listProducts } from '../../functions/productFunction';
import { Card, Avatar } from 'antd';
import ReactCrop from 'react-image-crop';
import {Image, Transformation} from 'cloudinary-react';




import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { listOrders } from '../../functions/orderFunctions';
import NairaFormat from '../../functions/NairaFormater';
const { Meta } = Card;
const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
}




const Orders = (props) => {
    const user = useSelector(state=>state.user)
    const authToken = user.token
    
    


    const [orders, setOrders] = useState([])
    const loadOrders = ()=>{
        listOrders().then(res=>{
            setOrders(res.data)
            console.log(res.data)
        })
    }
    useEffect(() => {
        loadOrders()
      return () => {
        
      };
    }, [])
    return <div className="container-fluid">
                <div className={"row justify-content-center"}>
                    <div className={"col-md-2"}>
                            <AdminNav/>
                    </div>


            

            <div className="col-md-9"> 
                <h4 className={'alert alert-secondary'}>Orders</h4>
            {/* cols */}
            <div className={"row"}>
            {orders ? orders.map(ord => (<div className="col-md-5 col-lg-5 col-sm-12 ml-1 p-0"><div
                className={'card mr-1 img-fluid my-1 p-2 '}
                 
                
                   >
                       
                <Meta className='m-0 p-0' title={ord.name+"  "+ord.timeOfOrder.slice(0, 10)} />

                <span className={'bold alert-info p-1'}>Price of Commodity:{ NairaFormat(ord.price)}</span>
                <span className={'bold alert-info p-1 border'}>Amount Paid in :{NairaFormat(ord.amountpaid)}</span>
                <span className={'bold alert-info p-1'}>Buyer Deliver :{ord.BDelivery}...</span>
                <span className={'bold alert-info p-1'}>Seller Delivery :{ord.SDelivery}...</span>
                <span className={'bold alert-info p-1'}>Approved :{JSON.stringify(ord.approved)}</span>
                <span className={'bold alert-info p-1'}>Location :{JSON.stringify(ord.location)}</span>
                <span className={'bold alert-info p-1'}>Receieved Payment :{JSON.stringify(ord.paid)}</span>
                <span className={'bold alert-info p-1'}>Seller paid :{JSON.stringify(ord.spaid)}</span>
                <span className={'bold alert-info p-1'}>Refund :{JSON.stringify(ord.refund)}</span>
                <span className={'bold alert-info p-1'}>Paid :{JSON.stringify(ord.paid)}</span>
                <span className={'bold alert-info p-1'}>Date of Order :{JSON.stringify(ord.timeOfOrder.slice(0, 10))}</span>
                <span className={'bold alert-info p-1'}>Time of Order :{JSON.stringify(ord.timeOfOrder.slice(11, 19))}</span>

                
                <button className="col-lg-12 btn btn-outline-info">Approved Order</button>
                <button className="col-lg-12 btn btn-outline-info">Confirm Delivery</button>
                <button className="col-lg-12 btn btn-outline-info">Dispatch</button>






                
                
                
                

            </div></div>
            )):null}
            
            </div>

            </div>
            
            </div>
           </div>
}

export default Orders;