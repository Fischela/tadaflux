import axios from 'axios';

export const listSubs = async () =>{
    return await axios.get("http://localhost:8000/api/subs")
}

export const listSubSpec = async (id, authToken) =>{
    return await axios.post("http://localhost:8000/api/subspec",{_id:id}, {
        headers:{authToken}
    } )
}

export const createSub = async (name, parent, authToken)=>{
    return await axios.post("http://localhost:8000/api/sub", {name, parent}, {headers:{authToken}})
}

export const readSub = async (slug) => {
    return await axios.get("http://localhost:8000/api/sub/"+slug)
} 

export const updateSub = async (slug, name, parent, authToken) => {
    return await axios.put("http://localhost:8000/api/sub", {name,parent, slug}, {headers:{authToken}})
}

export const deleteSub = async (slug, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE CAT",authToken)
    return await axios.post("http://localhost:8000/api/subd", {slug}, {headers:{authToken}})
}

