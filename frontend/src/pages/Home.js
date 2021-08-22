import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import React, { useState, useEffect, useRef } from 'react';
import { deleteProduct, listProducts } from '../functions/productFunction';
import { Card, Avatar } from 'antd';
import {Image, Transformation} from 'cloudinary-react';
import { Carousel } from 'antd';




import { EditOutlined, DeleteOutlined, SettingOutlined, } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import NairaFormat from '../functions/NairaFormater';
import Cookies from 'js-cookie';
const BgElement = Element.BgElement;


const { Meta } = Card;

const Home = (props)=>{

  const onChange = (a, b, c)=>{
    // console.log(a, b, c)
  }
  

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
}
  const [products, setProducts]  = useState([])
  const loadProducts = ()=>{

    listProducts().then(res=>{
      console.log("THIS IS FROM THE PRODUCT",)
      setProducts(res.data)

    })
  }

  useEffect(()=>{
    if (!Cookies.getJSON('cart')){
      Cookies.set("cart", {productList:[]})
    }

    loadProducts()

    return ()=>{}
  }, [])

    return (
    
        <div className="container-fluid">



            <Carousel autoplay afterChange={onChange}>
              <div>
                <h3 style={contentStyle}>A Market Place for and Only for Hungry peopele</h3>
              </div>
              <div>
                <h3 style={contentStyle}>You will Never be Hungry again</h3>
              </div>
              <div>
                <h3 style={contentStyle}>Fischela is Here for You</h3>
              </div>
              <div>
                <h3 style={contentStyle}>You are Guaranteed to get all Your goods within 24 hours.</h3>
              </div>
            </Carousel>

          <div className="row  justify-content-center">
          <h1 className="alert alert-info display-block col-lg-12 text-center">New  Arrivals!</h1>
          </div>

          <hr/>
          <div className="row justify-content-center">
            
              {products ? products.map(prod => (<Card
                className={'border blue-shadow m-1 p-1'}
                 hoverable
                onClick={e=>props.history.push("/product/info/"+prod.slug)}

                style={{ width:200 }}
                cover={<Image className ={"img-fluid"} publicId={prod.images[0].public_id} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="150" width="200" crop="thumb" />
            }  

            
                   >
                       
                <Meta className='m-0 p-0 bold' title={prod.name} description={NairaFormat(prod.price)} />

                
                
                
                
                

            </Card>
            )):null}

              </div>
          </div>
      
    
  


    
    
    )
    
    }
export default Home