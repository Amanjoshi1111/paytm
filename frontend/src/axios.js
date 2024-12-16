import axios from "axios";

export const httpInstance = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    timeout: 1000
})

