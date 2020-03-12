import axios from 'axios';
/**
 * Global API Base URL and Content Type
 * */

axios.defaults.baseURL = 'http://localhost:3010';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
