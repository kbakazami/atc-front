
import {getOffices, getOneOffice} from "../Services/office.service.js";

export async function officeLoader() {
    return getOffices()
}

export async function officeOneLoader(id) {
    return getOneOffice(id);
}