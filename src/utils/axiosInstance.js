import axios from "axios";

axios.defaults.baseURL = "https://jobsinsaudi.me/api/jobs";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Accept-Language"] = "en";

const axiosInstance = axios.create();

export default axiosInstance;
