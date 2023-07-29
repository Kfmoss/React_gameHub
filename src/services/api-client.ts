import axios from "axios";

export default axios.create({

    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'4f822404feeb4043b73f1a660e39e472'
    }
})