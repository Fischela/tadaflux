
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import Cookie from 'js-cookie';
import 'rc-banner-anim/assets/index.css';
import React, { useState, useEffect, useRef } from 'react';
import { deleteProduct, listProducts, readProduct } from '../functions/productFunction';
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
import { SpreadQty } from '../functions/spread';
const BgElement = Element.BgElement;
const {Option} = Select;

const { Meta } = Card;

const Cart = (props)=>{
  const [total, setTotal] = useState(0)
  const [qtysy, setQtysy] = useState(0)
  const [products, setProducts] = useState(Cookie.getJSON("cart").productList)

  const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
  }
  
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  useEffect(()=>{
    let sum = 0
    let newProd = products
    if(Cookie.getJSON('cart')){
      for (let count= 0; count<products.length; count++){
          newProd[count].newQty = 1
          sum += Number(products[count].price)
    }
    setProducts(newProd)
    setTotal(sum)
  }
    return()=>{}
  },[])

  return ( <div>
              <div className = {"container"}>
                <div className = {"row my-2"}>
                  <div className = {"col-lg-7 blue-shadow"}>
                
            {products.map(prod=>{
            return <Card title={"Seller > Joshua"}>
                <div className={"row"}>{JSON.stringify(products)}
                  <Card.Grid className="col-lg-6 col-sm-12 col-md-12" style={gridStyle}><Image publicId={prod.images[0].public_id} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="150" width="200" crop="thumb" /></Card.Grid>
                  <Card.Grid className="col-lg-3 col-sm-12 col-md-12" hoverable={false} style={gridStyle}>
                  <><span className={'mx-1'}>Qty {<SpreadQty products={products} setProducts={setProducts} prod={prod} qtysy={qtysy} setQtysy={setQtysy} prods={prod.qty}/>}</span></>

                  qtysy {qtysy}
                  </Card.Grid>
                  <Card.Grid className="col-lg-3" style={gridStyle}>{NairaFormat(prod.price)}</Card.Grid>
                </div>

            </Card>

            })}

            </div>

            <div className={"col-lg-5 blue-shadow"}>
            <Card className="shadow">
                <button onClick={e=>props.history.push({pathname:"/checkout",
                 state:{products:{products}, finalPrice:{total}}})} className={"btn btn-outline-info col-lg-12"}>Continue to Check Out</button>
                <li className={"list-group-item"}>
                  items(3)<span className="label label-pill pull-xs-right label-default ">
                    {NairaFormat(total)}
                    </span>
                  </li>

            </Card>
            </div>
                    </div>
                    </div>
            </div>
                    
                    )
          
      
    
  


    
    
    
    
}

export default Cart;