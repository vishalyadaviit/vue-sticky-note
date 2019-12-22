import axios from 'axios'
import { API_BASE_URL } from './constants.js'


console.log("API_BASE_URL called")
console.log(API_BASE_URL)

const axiosInstance = axios.create({
    baseURL: API_BASE_URL
})

export default axiosInstance;