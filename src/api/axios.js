import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "25d79f050820a6fe7a56a13ca0eab048",
        language: "ko-KR",
    },
});

export default instance;
