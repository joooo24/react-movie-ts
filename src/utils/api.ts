import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
});

// Add a request interceptor
api.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default api;


// const findAll = async () => {
//     const response = await apiClient.get<Tutorial[]>("/tutorials");
//     return response.data;
// }

// const findById = async (id: any) => {
//     const response = await apiClient.get<Tutorial>(`/tutorials/${id}`);
//     return response.data;
// }
