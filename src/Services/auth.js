import axios from "axios";

export async function login(credentials) {
    const response = await axios.post("http://localhost:8000/login", credentials);
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

export async function getCurrentUser(){
    const response = await axios.get("http://localhost:8000/current_user");
    return response.json();
}