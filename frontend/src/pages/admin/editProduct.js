import React, {useState, useEffect}  from 'react';
import AdminNav from '../../components/nav/AdminNav';
import {Select, Image, Badge, Avatar} from 'antd';
import { listCategories } from '../../functions/categoryFunctions';
import { listSubSpec } from '../../functions/subFunctions';
import { useSelector } from 'react-redux';
import imageResizer from 'react-image-file-resizer'
import { LeftCircleTwoTone, LoadingOutlined } from '@ant-design/icons';
import Axios from 'axios';
import { createProduct, readProduct, updateProduct } from '../../functions/productFunction';
import { toast } from 'react-toastify';


const EditProduct = (props)=>{
    const user = useSelector(state=>state.user)
    const [product, setProduct] = useState('')
    const [avail, setAvail] = useState(false)
    const authToken = user.token
    let imgs = []
    const [loading, setLoading] = useState(false)
    const [subs, setSubs] = useState([])

    const [listOfCategories, setListofCategories] = useState('')
    const loadCategories = ()=> {
        listCategories().then((res)=>{
            
            setListofCategories(res.data)
            
        })
    }

    const loadProduct = (slug) =>{
        readProduct(slug).then((res)=>{
            console.log("THIS IS HAPPENING IN THE LOAD PRODUCT")
            setValues(res.data)
            console.log("THIS IS THE PRODUCT", res.data)

        })
    }

    useEffect(() => {
        console.log("we are in the useEffect!")
        const slug = props.match.params.slug
        console.log("THIS IS THE REAL SLUG"+ slug)
        loadProduct(slug)
        loadCategories()
      return () => {
        
      };
    }, [])
    const {Option} = Select
    const innitialState = {
        name:"white shirts on dads",
        slug:"",
        brand:"palms angels",
        category:"",
        sub:"",
        description:"the white shirt everybody desires",
        price:5000,
        color:"red",
        qty:40,
        images:[],
        ratings:[],
        shipping:"yes",
        location:"madonna",
    }

    const handleSubmit = (e) => {
        //
        e.preventDefault()
        // console.log(values)
        updateProduct(values, authToken).then(res=>{
            console.log(res)
            toast.success("Product Updated Successfully")
            props.history.push("/admin/dashboard")
        }).catch(err=>{
            console.log(err)
            toast.error("error Updating image!")
        })
    }

    const handleImageUpload = (images) => {
        setLoading(true)

        console.log()
        console.log(images)
        let imageList = []
        for (let count = 0; count < images.length; count++){
        imageResizer.imageFileResizer(
            images[count],
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
                console.log("EXECUTED PROPERLY:")
              Axios.post("http://localhost:8000/api/image-upload", {image:uri}, {headers:{authToken}})
              .then(res=>{
                  console.log("THIS WORKED", values.images)
                  imageList.push({public_id:res.data.public_id, url:res.data.url})
                setValues({...values, images:imageList})
                setLoading(false)
        })
              .catch(err=>{console.log(err)
                setLoading(false)
            })
            },
            "base64"
          );
        }
        setLoading(false)
    }

    const handleChange = (e) => {
        //
        setValues({...values, category:e})

        setLoading(true)
        listSubSpec(e, authToken).then(res=>{
            setSubs([])

            // setValues({...values, sub:[]})

            setSubs(res.data)
            setAvail(true)
        }).catch(err=>{
            console.log(err)
            setLoading(false)
        })
    }

    const deleteImage = (e)=>{
        let ImageList = []
        Axios.post("http://localhost:8000/api/image-delete", {image:e}, {headers:{authToken}}).then(res=>{
            for (let count = 0; count<values.images.length; count++){
                    if (values.images[count].public_id != e){
                        ImageList.push(values.images[count])
                    }
            }

            setValues({...values, images:ImageList})
        }).catch(err=>console.log(err))
    }
    const [values, setValues] = useState(innitialState)
    const productForm = ()=>(
        <form onSubmit={handleSubmit}>
            <div className={"form-group"}>
                <label className={'btn btn-primary'}>
                    <input multiple class="form-control-file" type={"file"} placeholder={"Name"} onChange={e=>handleImageUpload(e.target.files)} />
                </label>
            </div>

            {values.images && !loading?values.images.map(image=>{
                //  <Image width={100} height={100} key={image.public_id} src={image.url} />
                return <span key={image.public_id} className="avatar-item">
                    <Badge className={'pointer'} value={image.public_id} count={"X"} onClick={e=>{deleteImage(image.public_id)}}>
                        <Avatar size={100} className={'m-2'} shape="round" src={image.url} />
                            </Badge>
                                </span>
            }):<LoadingOutlined/>}

            <div className={"form-group"}>
                <input class="form-control" type={"text"} placeholder={"Name"} value={values.name} onChange={e=>setValues({...values, name:e.target.value})} />
            </div>

            <div className={"form-group"}>
                
                <textarea class="form-control" 
                type={"text"} 
                placeholder={"Description"} 
                value={values.description} 
                onChange={e=>setValues({...values, description:e.target.value})} >

                </textarea>
            </div>

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"Price"} value={values.price} onChange={e=>setValues({...values, price:e.target.value})} />
            </div>


            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"quantity"} value={values.qty} onChange={e=>setValues({...values, qty:e.target.value})} />
            </div>

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"color"} value={values.color} onChange={e=>setValues({...values, color:e.target.value})} />
            </div>

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"brand"} value={values.brand} onChange={e=>setValues({...values, brand:e.target.value})} />
            </div>

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"shipping"} value={values.shipping} onChange={e=>setValues({...values, shipping:e.target.value})} />
            </div>

            <div className={"form-group"}>
                
                <input required class="form-control" type={"text"} placeholder={"location"} value={values.location} onChange={e=>setValues({...values, location:e.target.value})} />
            </div>

            <div className={"form-group"}>
                <Select required defaultValue="Please Select" className="form-control" onChange={e=>handleChange(e)}>
                    {listOfCategories?listOfCategories.map(c=>{
                    
                    return <Option key={c._id} value={c._id}>{c.name}</Option>
                    }):"categories not available"}


                </Select>
            </div>

            {avail && (<div className={"form-group"}>
                <Select required  mode={"multiple"} className="form-control" onChange={e=>setValues({...values,sub:e})}>
                    {subs?subs.map(c=>{
                    
                    return <Option key={c._id} value={c._id}>{c.name}</Option>
                    }):"categories not available"}


                </Select>
            </div>)}
            <div className={"form-group"}>
                
                <button class="btn btn-primary" type={"submit"} onClick={handleSubmit} >Save</button>
                <button class="btn btn-primary float-right" type={"submit"} onClick={e=>props.history.push("/admin/dashboard")} >Cancel</button>

            </div>
        </form>
    )
    return (
        <div className={"container-fluid mb-5 p-5"}>
            <div className={"row"}>
                <div className={"col-md-3"}>
                    <AdminNav/>
                </div>
                <div className={"col-md-9"}>
                   <center> <h4 className="alert alert-info">Edit your Product!</h4></center>
                    {productForm()}
                </div>
            </div>
        </div>
    )
}

export default EditProduct