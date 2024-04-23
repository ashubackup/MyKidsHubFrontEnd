import axios from "axios";

const BASE_URL=`http://91.205.172.123:7512`;
// const BASE_URL=`http://localhost:7512`;

export async function loginApi(data){
    const response=await axios.post(`${BASE_URL}/loginUser`,data);
    return response;
}

export async function subscribeApi(data){
    const response=await axios.post(`${BASE_URL}/subRequest`,data);
    return response;
}

export async function matchOtpApi(data){
    const response=await axios.post(`${BASE_URL}/matchOtp`,data);
    return response;
}

export async function priceApi(){
    const response=await axios.get(`${BASE_URL}/price`);
    return response;
}

export async function unsubApi(){
    const response=await axios.get(`${BASE_URL}/price`);
    return response;
}