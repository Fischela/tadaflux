import axios from 'axios';

export const listProducts = async () =>{
    return await axios.get("http://localhost:8000/api/products")
}

export const createProduct= async (values, authToken)=>{
    return await axios.post("http://localhost:8000/api/product", values, {headers:{authToken}})
}

export const readProduct = async (slug) => {
    console.log("GOT IN SOMEHOW")
    return await axios.get("http://localhost:8000/api/product/"+slug)
}

export const updateProduct = async (values, authToken) => {
    return await axios.put("http://localhost:8000/api/product", values, {headers:{authToken}})
}

export const deleteProduct = async (slug, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE CAT",authToken)
    return await axios.post("http://localhost:8000/api/productd", {slug}, {headers:{authToken}})
}
