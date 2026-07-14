import axios from "axios";

const api = axios.create({

    baseURL: "https://expence-tracker-backend-wqf6.onrender.com/api"

});

export default api;
