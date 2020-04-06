import axios from "axios";
// import { BASE_URL } from '../config';

// const BASE_URL = 'https://logistics-appx.herokuapp.com/api/v1/'
const BASE_URL = "http://localhost:9000/api/v1/";

const get = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}${url}`, options)
      .then(response => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject();
        }
      })
      .catch(error => {
        if (error && error.response && error.response.data)
          reject(error.response.data);
        else reject("please check internet connection");
      });
  });
};

const post = (url, payload, options = {}) => {
  return new Promise(function(resolve, reject) {
    axios
      .post(`${BASE_URL}${url}`, payload, options)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        if (error && error.response && error.response.data)
          reject(error.response.data);
        else reject("please check internet connection");
      });
  });
};

const put = (url, payload, options = {}) => {
  return new Promise(function(resolve, reject) {
    axios
      .put(`${BASE_URL}${url}`, payload, options)
      .then(response => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject();
        }
      })
      .catch(error => {
        console.log("ERROR>>>", error.response);
        reject(error);
      });
  });
};

const del = (url, options) => {
  return new Promise(function(resolve, reject) {
    axios
      .delete(`${BASE_URL}${url}`, options)
      .then(response => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject();
        }
      })
      .catch(error => {
        console.log("ERROR>>>", error.response);
        reject(error);
      });
  });
};

export { get, post, put, del };
