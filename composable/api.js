import { useUserStore } from "./UserStore";
import axios from "axios";

export const api = () => {
    const store = useUserStore()
    store.LoadUser()

    return axios.create({
        baseURL: "http://localhost:5000/api/",
        headers: {
            token: store.token
        }
    })
}