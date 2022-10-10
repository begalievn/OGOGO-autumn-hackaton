import axios from 'axios';
import { BASE_URL} from "../utils/constants/api-constants";

export const login = async (data) => {
    const newData = {
        user: data.username,
        pwd: data.password
    }
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const result = await axios.post(`${BASE_URL}/api/account/login/`, data, config);
    return result;
}

export const registerUser = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    data = {...data, password2: data.password}
    console.log("newData", data);
    const result = await axios.post(`${BASE_URL}/api/account/register/`, data, config);
    console.log(result);
}
