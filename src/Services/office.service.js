import axios, {all} from "axios";
import {data} from './offices';
import {dataOne} from "./office";
import {getCurrentUser} from "./auth";
import {useState} from "react";

const URL = 'http://localhost:8000/';


    export async function getOffices() {

        const response = await axios.get(URL + 'offices');
        const body = await response;
        if(response && response.status === 200){
            return body.data;
        }else{
            if(body){
                throw body;
            }else{
                throw new Error("Something went wrong");
            }
        }
    }

    export async function getOneOffice(id) {
        const response = await axios.get(URL + 'offices/' + id);
        const body = await response;
        if(response && response.status === 200){
            return body.data;
        }else{
            if(body){
                throw body;
            }else{
                throw new Error("Something went wrong");
            }
        }
    }

    export async function setOfficeReservation(date, duration, office_id, user_id)
    {
        return axios.get(URL, {
            date,
            duration,
            office_id,
            user_id
        }, {headers: {
                "Content-Type" : "application/json",
            }});
}

