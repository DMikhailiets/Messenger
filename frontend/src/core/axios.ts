import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8888/'
axios.defaults.headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3000/',
}

export default axios