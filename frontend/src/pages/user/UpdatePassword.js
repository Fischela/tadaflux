import React, { useState } from 'react';
import { toast } from 'react-toastify';
import UserNav from  '../../components/nav/UserNav';
import { auth } from '../../firebase';


const UpdatePassword =  (props) => {
    const [password, setPassword] = useState('')

    const  handleChange = async (e)=>{
        e.preventDefault()
        await auth.currentUser.updatePassword(password).then(res=>{
            toast.success('Password was updated successfully!')

        }).catch(err=>{
             toast.error(err.message)
        })
    }
    const passwordDesign = ()=> <form onSubmit={handleChange}>
            <h4>Update Password</h4>
        
        <div className={'form-group'}>
            <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div className={'form-group'}>
        <button className={'btn btn-primary'} type={'submit'} >Update</button>
        </div>

    </form>

    
    return <div className="container">
    <div className={"row"}>
        <div className={"col-md-2"}>
            <UserNav/>
            </div>
            <div className="col offset-md-2">{passwordDesign()}</div>
        </div> 
        </div>

}

export default UpdatePassword;