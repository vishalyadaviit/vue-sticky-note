import axiosInstance from '../common/axiosInstance.js'

export default {

    get(url) {
        // console.log("GET axiosInstance")
        // console.log(url)
        // console.log(axiosInstance)
        return axiosInstance.get(url)
    }

}