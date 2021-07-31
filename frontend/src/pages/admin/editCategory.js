import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// import UserNav from  '../../components/nav/UserNav';
import AdminNav from  '../../components/nav/AdminNav';

import { auth } from '../../firebase';
import {updateCategory, deleteCategory, listCatgories, readCategory} from '../../functions/categoryFunctions'
import {useSelector} from 'react-redux'
import {EditOutlined, DeleteOutlined} from "@ant-design/icons"

const EditCategory =  (props) => {
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const user = useSelector(state =>state.user)
    // const [listOfCategories, setListofCategories] = useState('')
    const authToken = user.token
    const  handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)
        updateCategory( props.match.params.slug,category, authToken).then((res)=>{
            toast.success("Category Updated successfully")
            // loadCategories()

        }).catch(err=>{
            setLoading(false)
            toast.error(err)
        })

        setCategory('')
        props.history.push("/create/category")

         
    }

    useEffect(()=>{
        
        loadCategory()

        return ()=>{}
        
    }, [])

    // const handleDelete = (slugs) =>{
    //     if (window.confirm("Delete?")){
    //         deleteCategory(slugs, authToken).then(res=>{
    //             loadCategories()
    //             toast.success("Category has been delete")



    //     }).catch(err=>{
    //         toast.error(err)
    //     })}
        // console.log(slug)
    // }

    const loadCategory = ()=> {
        readCategory(props.match.params.slug).then(res=>{
            setCategory(res.data.name)
        })
    }
    const updateCategoryDesign = ()=> <form onSubmit={handleSubmit}>
            <h4>Update Category</h4>
        
        <div className={'form-group'}>
            <input className="form-control" value={category} onChange={(e)=>setCategory(e.target.value)}/>
        </div>

        <div className={'form-group'}>
        <button className={'btn btn-primary'} type={'submit'} >Save</button>
        </div>

    </form>

    
    return <div className="container">
    <div className={"row"}>
        <div className={"col-md-2"}>
            <AdminNav/>
            </div>
            <div className="col offset-md-2">{updateCategoryDesign()}
            
            
{/* 
                {listOfCategories?listOfCategories.map((cate)=>{
                return  <div key={cate._id} className={'alert alert-secondary'}>{cate.name}
                    <span className="btn btn-sm btn-primary float-right">
                        {<EditOutlined/>}
                    </span>

                    <span onClick={e=>handleDelete(cate.slug)} className="btn btn-sm btn-primary float-right">
                        {<DeleteOutlined/>}
                    </span>
                </div>

                }):null} */}
            
            </div>
        </div> 
        </div>

}

export default EditCategory;