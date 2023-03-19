import axios from "axios";
import { SERVER } from "../constants/urls";

export const createConsent = (phone) => {
  console.log("Create consent", phone, SERVER);
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${SERVER}/api/createConsent/${phone}`,
        {
          clientURL: process.env.REACT_APP_CLIENT_HOST || "https://althsis.netlify.app"
        }
      )
      .then((res) => {
        console.log(res.data);
        resolve(res);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export const getConsent = (consentID) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${SERVER}/api/getConsent/${consentID}`)
      .then((res) => {
        console.log(res.data);
        console.log("got consent", res);
        resolve(res);
      })
      .catch((err) => {
        console.log("Err getting consent", err);
        console.error(err);
        reject(err);
      });
  });
};

export const createDataSession = (consentID) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${SERVER}/api/createDataSession/${consentID}`)
      .then((res) => {
        console.log(res.data);
        resolve(res);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export const getData = (dataSessionID) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${SERVER}/api/getData/${dataSessionID}`)
      .then((res) => {
        console.log("Got data", res.data);
        resolve(res);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

window.createConsent = createConsent;
window.getConsent = getConsent;
window.createDataSession = createDataSession;
window.getData = getData;
