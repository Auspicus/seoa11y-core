import unirest from 'unirest';
import HTTP from 'http-status';
import { URL_TO_API } from '../constants';

export default {
  get: (id, token) => {
    return new Promise((resolve, reject) => {
      unirest
      .get(`${URL_TO_API}/issues/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .end(response => {
        if (response.status === HTTP.OK) {
          resolve(response.body);
        } else {
          reject(response);
        }
      })
    })
  },

  list: (filters, token) => {
    return new Promise((resolve, reject) => {
      unirest
      .get(`${URL_TO_API}/issues`)
      .set('Authorization', `Bearer ${token}`)
      .query(filters)
      .end(response => {
        if (response.status === HTTP.OK) {
          resolve(response.body);
        } else {
          reject(response);
        }
      })
    })
  }
}
