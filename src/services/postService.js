import axiosService from './axiosService'

export default {
    getPosts() {
        return axiosService.get("/posts");
    }
}