import axios from "axios";


const FARMER_BASE_REST_API_URL = 'http:localhost:8080';

class FarmerzServic{

    getAllFarmerz(){
        return axios.get(FARMER_BASE_REST_API_URL)
    }
}

export default FarmerzServic;