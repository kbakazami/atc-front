import axios from "axios";
import {data} from './offices';
import {dataOne} from "./office";

const URL = 'http://localhost:8000/';

class OfficeService {

    getOffices() {
        return data;
        // return axios.get(data)
        //     .then(response => {
        //         if(response.data) {
        //             console.log(response);
        //         }
        //     })
        //     .catch(error => console.log(error));
    }

    getOneOffice() {
        return dataOne;
    }

    getCurrentUser()
    {
        return JSON.parse(localStorage.getItem('user'));
    }

    setOfficeReservation(date, duration, office_id, user_id)
    {
        return axios.get(URL, {
            date,
            duration,
            office_id,
            user_id
        }, {headers: {
                "Content-Type" : "application/json",
            }})
    }
}

export default new OfficeService();