import axios from 'axios';

export const listCategories = async () =>{
    return await axios.get("http://localhost:8000/api/categories")
}

export const createCategory = async (name, authToken)=>{
    return await axios.post("http://localhost:8000/api/category", {name}, {headers:{authToken}})
}

export const readCategory = async (slug) => {
    return await axios.get("http://localhost:8000/api/category/"+slug)
} 

export const updateCategory = async (slug, name, authToken) => {
    return await axios.put("http://localhost:8000/api/category", {name, slug}, {headers:{authToken}})
}

export const deleteCategory = async (slug, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE CAT",authToken)
    return await axios.post("http://localhost:8000/api/categoryd", {slug}, {headers:{authToken}})
}
