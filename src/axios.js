import axios from 'axios'

const instance = axios.create({
    
    // baseURL: 'http://localhost:5001/clone-ea9ab/us-central1/api' 
    baseURL: 'https://us-central1-clone-ea9ab.cloudfunctions.net/api' 
})

export default instance;