import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import Cookie from 'js-cookie';
import 'rc-banner-anim/assets/index.css';
import React, { useState, useEffect, useRef } from 'react';
import { deleteProduct, listProducts, readProduct } from '../functions/productFunction';
import {SpreadQty} from '../functions/spread';
import { Card, Avatar, Select } from 'antd';
import {Image, Transformation} from 'cloudinary-react';
import {Carousel} from "react-responsive-carousel";
import {toast} from "react-toastify"
import "react-responsive-carousel/lib/styles/carousel.min.css"



import { EditOutlined, DeleteOutlined, SettingOutlined,ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import NairaFormat from '../functions/NairaFormater';
import { createOrder } from '../functions/order';
const BgElement = Element.BgElement;
const {Option} = Select;

const { Meta } = Card;

const CheckOut = (props) => {
  const user = useSelector(state=>state.user)
  const email = user.email
  const authToken = user.token
  console.log(authToken)
    // creates Order and makes payment

  const Pay = (payment) => {
      let newProdList = []
      for (let count=0; count<products.length; count++){
        products[count].BuyerId = email
        newProdList.push(products[count])
      }
      setProducts(newProdList)
      console.log(products)

      createOrder(products, total, authToken).then((res)=>{
        toast.success("order received from backend")
        console.log(res)
      }).catch(err=>{console.log(err)})
    }

    


    console.log("FINAL PRICE",props.location.state.finalPrice)
    const [total, setTotal] = useState(0)
    useEffect(()=>{
            setTotal(props.location.state.finalPrice.total)
            setProducts(props.location.state.products.products)
        return ()=>{}

    }, [])
    const [products, setProducts] = useState([])
    const config = {
        cloud_name: 'norvirae',
      api_key: '267177314333933',
      api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
      }

      const gridStyle = {
        width: '25%',
        textAlign: 'center',
      };

    return ( <div>
        <div className = {"container"}>
          <div className = {"row my-2"}>
            <div className = {"col-lg-7 blue-shadow"}>
          
      {products?products.map(prod=>{
      return <Card className={'mb-1'} title={"Seller > Joshua"}>
          <div className={"row"}>
            <Card.Grid className="col-lg-6" style={gridStyle}><Image publicId={prod.images[0].public_id} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="150" width="200" crop="thumb" /></Card.Grid>
            <Card.Grid className="col-lg-6" hoverable={false} style={gridStyle}>
                            <><span className={'mx-1'}>Quantity
                            {SpreadQty(prod.qty)}</span></>
                            <div className="">{NairaFormat(prod.price)}</div>


            </Card.Grid>
          </div>

      </Card>

      }):null}

      </div>

      <div className={"col-lg-5 blue-shadow"}>
      <Card className="shadow">
          <button onClick={()=>Pay(products)} className={"btn btn-outline-info col-lg-12"}>Check and Pay</button>
          <li className={"list-group-item"}>
            items(3)<span className="label label-pill pull-xs-right label-default ">
              {NairaFormat(total)}
              </span>
            </li>

      </Card>
      </div>
              </div>
              </div>
      </div>)
}


export default CheckOut