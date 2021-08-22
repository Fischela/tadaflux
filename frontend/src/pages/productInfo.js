import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import Cookie from 'js-cookie';
import 'rc-banner-anim/assets/index.css';
import React, { useState, useEffect, useRef } from 'react';
import { deleteProduct, listProducts, readProduct } from '../functions/productFunction';
import { Card, Avatar } from 'antd';
import {Image, Transformation} from 'cloudinary-react';
import {Carousel} from "react-responsive-carousel";
import {toast} from "react-toastify"
import "react-responsive-carousel/lib/styles/carousel.min.css"



import { EditOutlined, DeleteOutlined, SettingOutlined,ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
const BgElement = Element.BgElement;


const { Meta } = Card;

const ProductInfo = (props)=>{
  const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
}
  const emptyCart = (e)=>{
    Cookie.remove("cart")
    window.location.reload()
  }

  const DuplicateProd = (product, localProductList) => {
    console.log("THIS IS INSIDE CHECKDUP")
    let duplicated = false
    for (let count = 0; count<localProductList.length; count++){
      console.log("COMPARER", localProductList[count]._id, "COMPARED", product._id)
      if(localProductList[count]._id==product._id){
        duplicated = !duplicated
      }
    }
    return duplicated;

  }
  const AddToCart = (e)=>{
    
    let localProductList  = Cookie.getJSON("cart")
    console.log(localProductList)
    if(!DuplicateProd(product, localProductList.productList)){
      localProductList.productList.push(product)
      Cookie.set("cart", {productList:localProductList.productList}, { expires: 7 })
      let carTs = Cookie.getJSON("cart")


      console.log("THIS IS ADD TO CART FUNCTIONALITY",carTs.productList)
      window.location.reload()

    }

    else{
      toast.success("Product already in Cart checkout")
    }

    
    // toast.success("Cool")
    // toast.success(carTs.worked)
  }
  const [product, setProduct]  = useState('')
  const loadProduct = ()=>{
    console.log(props.match.params.slug)
    readProduct(props.match.params.slug).then(res=>{
      console.log("THIS IS FROM THE PRODUCT", res.data)

      setProduct(res.data)
    })
  }

  useEffect(()=>{
    console.log(props.match.params)
    let checkCart = Cookie.getJSON("cart")
    if (!checkCart){
      Cookie.set("cart", {productList:[]}, { expires: 7 })
      toast.success("it didn't exist initially")
    }
    loadProduct()

    return ()=>{}
  }, [])

    return (
      
        <div className="container-fluid">
            

          <div className="row  justify-content-center">
          <div className="alert alert-secondary block h2 block col-lg-12 text-center">Product</div>

          </div>
          <hr/>
          {/* <Image key ={e.public_id} publicId={e.public_id}
                className="m-1 img-fluid" 
                version="1573726751" cloud_name={config.cloud_name}
                 secure="true" alt="Casual Jacket" height="auto" width="500" /> */}
          <div className="row justify-content-center">
            
              {product ? <div className="col-md-8 col-lg-7 col-sm-12 p-3"><div
                className={'border card'}
                hoverable
              
                   >
                     
                <Carousel autoPlay infiniteLoop showArrows showStatus showThumbs={true}>                   
                {product.images?product.images.map(e=>{
                return <div><img src={e.url} /></div>}):null}
                </Carousel>
                       

                <span className={'bold m-1'}>{"₦"+ (product.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }</span>
                
                Description: <span className={""}>{product.description}</span>
                
                

            </div></div>
            :null}

            <div 
            
            className="col-lg-5 border card">
              <Card actions={[<><ShoppingCartOutlined onClick={e=>AddToCart()}  /><br/> Add to Cart</>,
               <span onClick={e=>emptyCart()}>Purchase Now</span>, 
               <><HeartOutlined /><br/> Add to WishList</>,

              ]}>

              <h4 className="text-center">{product.name}</h4>

              <ul className={"list-group"}>
                <li className={"list-group-item"}>
                  Price <span className="label label-pill pull-xs-right label-default ">
                    {"₦"+ (Number(product.price)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                    </span>
                </li>

                <li className={"list-group-item"}>
                  Price <span className="label label-pill pull-xs-right label-default ">
                    {product.price}
                    </span>
                </li>
                <li className={"list-group-item"}>
                brand<span className="label label-pill pull-xs-right label-default ">
                    {product.brand}
                    </span>
                  </li>

                  <li className={"list-group-item"}>
                  qty<span className="label label-pill pull-xs-right label-default ">
                    {product.qty}
                    </span>
                  </li>

                  <li className={"list-group-item"}>
                brand<span className="label label-pill pull-xs-right label-default ">
                    {product.brand}
                    </span>
                  </li>

                  <li className={"list-group-item"}>
                  location<span className="label label-pill pull-xs-right label-default ">
                    {product.location}
                    </span>
                  </li>

                  <li className={"list-group-item"}>
                  color<span className="label label-pill pull-xs-right label-default ">
                    {product.color}
                    </span>
                  </li>

                  <li className={"list-group-item"}>
                  shipping<span className="label label-pill pull-xs-right label-default ">
                    {product.shipping}
                    </span>
                  </li>

                  
                  
              </ul>
              </Card>
              <hr/>
              </div>

              </div>
              </div>
          
      
    
  


    
    
    )
    
    }
export default ProductInfo