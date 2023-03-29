import axios from "axios";
const URL = "http://localhost:8000/";

export async function createUser(newUser){
    const response = await axios.post(URL + "register", newUser);
    const body = await response;
    if(response && response.status === 200){
        return body;
    }else{
        if(body){
            throw body;
        }else{
            throw new Error("Something went wrong");
        }
    }
}