import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "../constants/authID";

export const createSession = (phone, fromDate='', toDate='') => {
  return new Promise((resolve, reject) => {
    axios
      .post("https://fiu-uat.setu.co/consents", 
        {
          "Detail": {
              "consentStart": "{{$isoTimestamp}}",
              "consentExpiry": "2022-04-23T05:44:53.822Z",
              "Customer": {
                  "id": `${phone}@onemoney`
              },
              "FIDataRange": {
                  "from": "2021-10-01T00:00:00Z",
                  "to": "2021-11-01T00:00:00Z"
              },
              "consentMode": "STORE",
              "consentTypes": [
                  "TRANSACTIONS",
                  "PROFILE",
                  "SUMMARY"
              ],
              "fetchType": "PERIODIC",
              "Frequency": {
                  "value": 30,
                  "unit": "MONTH"
              },
              "DataFilter": [
                  {
                      "type": "TRANSACTIONAMOUNT",
                      "value": "5000",
                      "operator": ">="
                  }
              ],
              "DataLife": {
                  "value": 1,
                  "unit": "MONTH"
              },
              "DataConsumer": {
                  "id": "setu-fiu-id"
              },
              "Purpose": {
                  "Category": {
                      "type": "string"
                  },
                  "code": "101",
                  "text": "Loan underwriting",
                  "refUri": "https://api.rebit.org.in/aa/purpose/101.xml"
              },
              "fiTypes": [
                  "DEPOSIT"
              ]
          },
          "redirectUrl": "https://setu.co"
        },
        {
          headers: {
            "x-client-id": CLIENT_ID,
            "x-client-secret": CLIENT_SECRET
          }
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  });
};




window.createSession = createSession;