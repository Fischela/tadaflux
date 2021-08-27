import Cookies from "js-cookie"
export const userReducer = (state=null, action)=>{
    switch(action.type){
        case "LOGGED_IN_USER":
            return action.payload

        case "LOGGED_OUT_USER":
            return action.payload

        default:
            return state
    }

}

if (typeof Cookies.getJSON('cart') == "undefined"){
    Cookies.set("cart", {productList:[]})
}


export const addToCart = (state=Cookies.getJSON("cart"), action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return action.payload
        default:
            return state
    }
}