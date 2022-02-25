import axios from "axios";


const FARMER_BASE_REST_API_URL = 'http:localhost:6789/api/v1/farmer';

class FarmerzServic{

    getAllFarmerz(){
        return axios.get(FARMER_BASE_REST_API_URL)
    }

    createFarmer(farmer){
        return axios.post(FARMER_BASE_REST_API_URL,farmer);

    }
}

export default FarmerzServic;