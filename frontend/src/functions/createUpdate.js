import axios from 'axios';


export const createOrUpdateUser = async (authToken) => {
    console.log(process.env.REACT_APP_API)
    return await axios.post("http://localhost:8000/api/createupdateuser", {},
        {headers:{authToken}})
}

