import axios from "axios";

const FARMER_BASE_REST_API_URL= 'http:localhost:6789';
class FarmerServ{
    getAllFarmer(){
        return axios.get( FARMER_BASE_REST_API_URL);
    }
    createFarmer(farmer){
        return axios.post(FARMER_BASE_REST_API_URL,farmer);

    }
    getFarmerById(farmerId){
        return axios.get(FARMER_BASE_REST_API_URL + '/'+ farmerId);
    }
    updatesFarmer(farmerId,farmer){
        return axios.put(FARMER_BASE_REST_API_URL+ '/'+farmerId,farmer);
    }
    deleteFarmer(farmerId){
        return axios.delete(FARMER_BASE_REST_API_URL + '/'+ farmerId);
    }

}
export default new FarmerServ();