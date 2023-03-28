import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7204/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})


