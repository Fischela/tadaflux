import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AdminNav from  '../../components/nav/AdminNav';

import { auth } from '../../firebase';
import {createCategory, deleteCategory, listCategories} from '../../functions/categoryFunctions';
import {useSelector} from 'react-redux';
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const CreateCategory =  (props) => {
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const user = useSelector(state =>state.user)
    const [listOfCategories, setListofCategories] = useState('')
    const [keyword, setKeyword] = useState('')
    const authToken = user.token
    const  handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)
        createCategory(category, authToken).then((res)=>{
            toast.success("Category Created successfully")
            loadCategories()

        }).catch(err=>{
            setLoading(false)
            toast.error(err)
        })
        setCategory('')
         
    }

    useEffect(()=>{
        loadCategories()

        return ()=>{}
        
    }, [])

    const searched = (keyword)=>(c)=>c.name.toLowerCase().includes(keyword)

    const handleDelete = (slugs) =>{
        if (window.confirm("Delete?")){
            deleteCategory(slugs, authToken).then(res=>{
                loadCategories()
                toast.success("Category has been delete")



        }).catch(err=>{
            toast.error(err)
        })}
        // console.log(slug)
    }

    const loadCategories = ()=> {
        listCategories().then((res)=>{
            
            setListofCategories(res.data)
            
        })
    }

    const handleSearchChange = (e) =>{
        e.preventDefault()
        setKeyword(e.target.value.toLowerCase())
    }
    const createCategoryDesign = ()=> <form onSubmit={handleSubmit}>
            <h4>Create Category</h4>
        
        <div className={'form-group'}>
            <input className="form-control" placeholder={"Category"} value={category} onChange={(e)=>setCategory(e.target.value)}/>
        </div>

        <div className={'form-group'}>
            <input className="form-control" value={keyword} placeholder={"Filter"} onChange={handleSearchChange}/>
        </div>
 

        <div className={'form-group'}>
        <button className={'btn btn-primary'} Ferrari={'submit'} >Save</button>
        </div>

    </form>

    
    return <div className="container-fluid">
    <div className={"row"}>
        <div className={"col-md-2"}>
            <AdminNav/>
            </div>
            <div className="col offset-md-2">{createCategoryDesign()}
            
            

                {listOfCategories?listOfCategories.filter(searched(keyword)).map((cate)=>{
                return  <div key={cate._id} className={'alert alert-secondary'}>{cate.name}
                    <Link to = {"/edit/category/"+cate.slug} className="btn btn-sm btn-primary float-right">
                        {<EditOutlined/>}
                    </Link>

                    <span onClick={e=>handleDelete(cate.slug)} className="btn btn-sm btn-primary float-right">
                        {<DeleteOutlined/>}
                    </span>
                </div>

                }):null}
            
            </div>
        </div> 
        </div>

}

export default CreateCategory;