import axios from "axios";

export async function login(credentials) {
    const response = await axios.post("http://localhost:8000/api/login_check", credentials);
    const body = await response;
    if(response && response.status === 200){
        localStorage.setItem("user", body.data.token);
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
    const token = localStorage.getItem("user");
    const response =  await axios.get("http://localhost:8000/current_user",{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const body = await response;
    return body.data;
}

export async function logout(){
    localStorage.removeItem("user");
}