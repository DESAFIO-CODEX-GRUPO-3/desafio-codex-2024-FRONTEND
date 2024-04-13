import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://desafio-codex-2024-apirest.onrender.com"
})