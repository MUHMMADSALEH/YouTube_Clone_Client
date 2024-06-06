import axios from "axios";

export const makeRequest=axios.create({
    baseURL: "https://youtube-clone-client-8.onrender.com/api/",
    withCredentials:true,
})