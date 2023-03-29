import {getCurrentUser} from "../Services/auth.js";

export async function rootLoader() {
    return getCurrentUser();
}