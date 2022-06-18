import axios, { AxiosError } from 'axios';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

serverApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error?.response?.data);
  },
);

export const getCampsByType = async (type) => {
  await serverApi
    .get(`/camps?type=${type}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err);
    });
};

export const getCamp = async (campId) => {
  await serverApi
    .get(`/camps/${campId}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err);
    });
};
