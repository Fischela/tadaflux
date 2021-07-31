import axios from 'axios';

export const currentUser = async (authToken) => {
    console.log(process.env.REACT_APP_API)
    return await axios.post("http://localhost:8000/api/currentuser", {},
        {headers:{authToken}})
}