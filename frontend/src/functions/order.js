import axios from 'axios';

export const listOrder = async () =>{
    return await axios.get("http://localhost:8000/api/orders")
}

export const createOrder= async (products, total, authToken)=>{
    return await axios.post("http://localhost:8000/api/order", {products, total}, {headers:{authToken}})
}

export const readOrder = async (id) => {
    console.log("GOT IN SOMEHOW")
    return await axios.get("http://localhost:8000/api/order/"+id)
}

export const updateOrder = async (values, authToken) => {
    return await axios.put("http://localhost:8000/api/order", values, {headers:{authToken}})
}

export const deleteOrder = async (id, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE CAT",authToken)
    return await axios.post("http://localhost:8000/api/orderd", {id}, {headers:{authToken}})
}
