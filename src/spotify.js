import axios from 'axios';

const authEndpoint = "https://accounts.spotify.com/authorize"
const clintID = "c3c3d040b507438a947f7dc51583bd5c";
const redirecturl = "http://localhost:3000/player";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}?client_id=${clintID}&redirect_uri=${redirecturl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL : "https://api.spotify.com/v1",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export default apiClient;