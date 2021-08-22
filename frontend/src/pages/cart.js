
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import Cookie, { set } from 'js-cookie';
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
import { createOrder, updateOrder } from '../functions/orderFunctions';
import {PaystackButton} from 'react-paystack';
const BgElement = Element.BgElement;
const {Option} = Select;

const { Meta } = Card;

const Cart = (props)=>{
  const [orderSuccess, setOrderSuccess] = useState([])
  const [phone, setPhone] = useState("07025488825")
  const [name, setName] = useState("Frank Norbert Mbah")

  const [amount, setAmount] = useState(100)
  const [email, setEmail] = useState("norbertmbafrank@gmail.com")
  const publicKey = "pk_test_c0198a35cd0526b34365d6241d8c218fa33db418"

  const [checkt, setCheckt] = useState(false)
  const [total, setTotal] = useState(0)
  const [qtysy, setQtysy] = useState(0)
  const user = useSelector(state=>state.user)
  const [products, setProducts] = useState(Cookie.getJSON("cart").productList)
  const [emptys, setEmptys] = useState(typeof products != 'undefined' && products.length > 0?false:true)
  console.log(products)

  const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
  }

  const handleCheckout = (e) => {
    e.preventDefault()
    if(user && user.token){
    setCheckt(true)
    setAmount(total * 100)
    let neworder = products
    neworder.total = total
    const authToken = user.token
    console.log(authToken)
    console.log(neworder)
    toast.success("checkOut clicked")
    createOrder( {neworder, authToken}).then((res)=>{
      setOrderSuccess(res.data.successp)
      console.log(res.data.successp)})
    console.log("THIS IS THE PRODUCT FROM HANDLE CHECKOUT",products)}
    else{
      props.history.push({pathname:"/login", state:{msg:"Login to checkout", role:"cart"}})
    }
  }

  const setProds = ({e, prod, prods})=>{
    let newProds = products

    for (let ct = 0; ct<products.length; ct++){
      if(newProds[ct]._id == prod._id){
        newProds[ct].newQty = Number(e)
      }
    }
    setProducts(newProds)
    Cookie.set("cart", {productList:products})
    calculateTotal()
    SpreadQty({prod, prods})
    console.log(products)
  }
  
  const SpreadQty = ({ prod, prods}) => {
    

    let qtyss = []
    for (let count = 1; count<=Number(prods); count++){
      console.log("THIS IS FROM THE COUNT",count)
      qtyss.push(count)
    }

    return (<Select onChange={e=>{setProds({e, prod, prods})}} value={prods.newQty} defaultValue={1} style={{ width: '50%' }} placeholder="Tags Mode" >
              {qtyss.map((nums)=>{return <Option key={nums} >{nums}</Option>})}
              </Select>)
    

  }
  
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  const calculateTotal = ()=>{
    let sum = 0
    let newProd = products
    if(Cookie.getJSON('cart')){
      for (let count= 0; count<products.length; count++){
          sum = sum + (Number(products[count].price) * Number(products[count].newQty)) 
    }
    setTotal(sum)


  }
}

let componentProps = {
  email,
  amount,
  metadata: {
    name,
    phone,
  },
  publicKey,
  text: "Pay Now",
  onSuccess: (result) =>{
    console.log("MONEY RESULT", result)
    updateOrder(orderSuccess, user.token).then((res)=>{
      console.log("THIS IS FROM THE PAYSTACK UPDATE",res)})
      
    alert("Thanks for doing business with us! Come back soon!!")
    toast.success("Payment was completed successfully")
    },
  onClose: () => alert("Wait! You need this oil, don't go!!!!"),
}


  const insertNewQty = () => {
    let newProd = products
    for (let count= 0; count<products.length; count++){
      if (!newProd[count].newQty){
        newProd[count].newQty = 1}
  }
    setProducts(newProd)
  }


  useEffect(()=>{
    insertNewQty()
    console.log(products)
    calculateTotal()
    return()=>{}
  },[])

  return  <div>
              <div className = {"container"}>
                <div className = {"row my-2"}>
                  <div className = {"col-lg-7 blue-shadow"}>
                
            {typeof products != 'undefined' && products.length > 0 ?products.map(prod=>{
            return <Card title={"Seller > Joshua"}>
                <div className={"row"}>
                  <Card.Grid className="col-lg-6 col-sm-12 col-md-12" style={gridStyle}><Image publicId={prod.images[0].public_id} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="150" width="200" crop="thumb" /></Card.Grid>
                  <Card.Grid className="col-lg-3 col-sm-12 col-md-12" hoverable={false} style={gridStyle}>
                  <><span className={'mx-1'}>Qty {<SpreadQty products={products} setProducts={setProducts} prod={prod} qtysy={qtysy} setQtysy={setQtysy} prods={prod.qty}/>}</span></>

                  </Card.Grid>
                  <Card.Grid className="col-lg-3" style={gridStyle}>{NairaFormat(prod.price)}</Card.Grid>
                </div>

            </Card>

            }):<Card> Cart is Empty!</Card>}

            </div>

            <div className={"col-lg-5 blue-shadow"}>
            <Card className="shadow">
                {checkt?<PaystackButton className={"col-lg-12 btn btn-info"} {...componentProps} />:<button disabled={emptys}  onClick={handleCheckout}
                 className={"btn btn-outline-info col-lg-12"}>{"Continue to Check Out"}</button>}
                
               { products?products.map(prod=>{
               
               return <li className={"list-group-item"}>
                  
                  {prod.name +"~~ x "+prod.newQty}<span className="label label-pill pull-xs-right label-default ">
                    {NairaFormat(prod.price)}
                    </span>
                  </li>}):null}
                
                <li className={"list-group-item text-success"}>
                  
                  Total<span className="label label-pill pull-xs-right label-default ">
                    {NairaFormat(total)}
                    </span>
                  </li>

            </Card>
            </div>
                    </div>
                    </div>
            </div>
                    
          
      
    
  


    
    
    
    
}

export default Cart;