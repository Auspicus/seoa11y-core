import unirest from 'unirest';
import HTTP from 'http-status';
import { URL_TO_API } from '../constants';

export default {
  createFromSitemap: (url, token) => {
    return new Promise((resolve, reject) => {
      unirest
      .post(`${window.location.protocol}//${window.location.host}/report`)
      .set('Authorization', `Bearer ${token}`)
      .header('Content-Type', 'application/json')
      .send({
        url
      })
      .end(response => {
        if (response.status === HTTP.OK) {
          resolve(response.body);
        } else if (response.error) {
          reject(response.error);
        } else {
          reject(response);
        }
      })
    })
  },

  createFromPage: (url, token) => {
    return new Promise((resolve, reject) => {
      unirest
      .post(`${window.location.protocol}//${window.location.host}/report`)
      .set('Authorization', `Bearer ${token}`)
      .header('Content-Type', 'application/json')
      .send({
        urls: [url]
      })
      .end(response => {
        if (response.status === HTTP.OK) {
          resolve(response.body);
        } else if (response.error) {
          reject(response.error);
        } else {
          reject(response);
        }
      })
    })
  },

  get: (id, token) => {
    return new Promise((resolve, reject) => {
      unirest
      .get(`${URL_TO_API}/reports/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .end(response => {
        if (response.status === HTTP.OK) {
          resolve(response.body);
        } else if (response.error) {
          reject(response.error);
        } else {
          reject(response);
        }
      })
    })
  },

  list: (token) => {
    return new Promise((resolve, reject) => {
      unirest
      .get(`${URL_TO_API}/reports`)
      .set('Authorization', `Bearer ${token}`)
      .end(response => {
        if (response.status === HTTP.OK) {
          resolve(response.body);
        } else if (response.error) {
          reject(response.error);
        } else {
          reject(response);
        }
      })
    })
  }
}
