import axios from "axios";
import {data} from './office';

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
}

export default new OfficeService();