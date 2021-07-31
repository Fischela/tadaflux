import React, { useState, useEffect, useRef } from 'react';
import AdminNav from '../../components/nav/AdminNav'
import { deleteProduct, listProducts } from '../../functions/productFunction';
import { Card, Avatar } from 'antd';
import ReactCrop from 'react-image-crop';
import {Image, Transformation} from 'cloudinary-react';




import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
const { Meta } = Card;
const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
}




const AdminDashboard = (props) => {
    const user = useSelector(state=>state.user)
    const authToken = user.token
    const handleDelete = (slug) =>{
        deleteProduct(slug, authToken).then(res=>{console.log(res)
            loadProducts()
        })

    }
    


    const [products, setProducts] = useState([])
    const loadProducts = ()=>{
        listProducts().then(res=>{
            setProducts(res.data)
            console.log(res.data)
        })
    }
    useEffect(() => {
        loadProducts()
      return () => {
        
      };
    }, [])
    return <div className="container-fluid">
                <div className={"row justify-content-center"}>
                    <div className={"col-md-2"}>
                            <AdminNav/>
                    </div>


            

            <div className="col-md-9"> 
                <h4 className={'alert alert-secondary'}>Admin page!</h4>
            {/* cols */}
            <div className={"row"}>
            {products ? products.map(prod => (<div className="col-md-3 col-lg-3 col-sm-12 ml-1 p-0"><Card
                className={'mr-1 img-fluid '}
                 
                style={{ width:200, height:100 }}
                cover={<Image publicId={prod.images[0].public_id} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="150" width="200" crop="thumb" />
            } 
                actions={[
                    <DeleteOutlined onClick={e=>handleDelete(prod.slug)} key="setting" />,
                    <EditOutlined onClick={e=>props.history.push('/edit/product/'+prod.slug)} key="edit" />,
                  ]} 
                   >
                       
                <Meta className='m-0 p-0' title={prod.name} />

                <span className={'bold'}>{"₦"+ (prod.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }</span>
                
                
                
                

            </Card></div>
            )):null}
            
            </div>

            </div>
            
            </div>
           </div>
}

export default AdminDashboard;