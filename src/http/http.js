import axios from "axios";

// const BASE_URL = `http://91.205.172.123:7512`;
// const BASE_URL=`http://localhost:7512`;
const BASE_URL=`https://www.backend.learnablekids.com`;

export async function loginApi(data) {
  const response = await axios.post(`${BASE_URL}/loginUser`, data);
  return response;
}

export async function subscribeApi(data) {
  const response = await axios.post(`${BASE_URL}/subRequest`, data);
  return response;
}

export async function matchOtpApi(data) {
  const response = await axios.post(`${BASE_URL}/matchOtp`, data);
  return response;
}

export async function priceApi() {
  const response = await axios.get(`${BASE_URL}/price`);
  return response;
}

export async function unsubApi(ani) {
  const response = await axios.post(`${BASE_URL}/unsub`, ani);
  return response;
}

export async function termsApi() {
  const response = await axios.post(`${BASE_URL}/sendTerms`, {
    serviceId: "1",
    type: "terms",
  });
  return response;
}

export async function questionsApi() {
  const response = await axios.post(`${BASE_URL}/sendTerms`, {
    serviceId: "1",
    type: "faq",
  });
  return response;
}

export async function packInfoApi(ani) {
  const response = await axios.get(`${BASE_URL}/pack?ani=${ani}`);
  return response;
}
