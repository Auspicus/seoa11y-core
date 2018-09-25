import unirest from 'unirest';
import HTTP from 'http-status';
import { URL_TO_API } from '../constants';

export default {
  create: user => {
    return new Promise((resolve, reject) => {
      unirest
      .post(`${URL_TO_API}/user`)
      .header('Content-Type', 'application/json')
      .send(user)
      .end(response => {
        if (response.status === HTTP.OK) {
          resolve(response.body);
        } else {
          reject(response);
        }
      })
    })
  },

  login: user => {
    return new Promise((resolve, reject) => {
      unirest
      .post(`${URL_TO_API}/user/login`)
      .header('Content-Type', 'application/json')
      .send({
        email: user.email,
        password: user.password
      })
      .end(response => {
        if (response.status === HTTP.OK) {
          resolve(response.body);
        } else {
          reject(response);
        }
      })
    })
  },

  authenticate: token => {
    return new Promise((resolve, reject) => {
      unirest
      .get(`${URL_TO_API}/user/authenticate`)
      .set('Authorization', `Bearer ${token}`)
      .header('Content-Type', 'application/json')
      .end(response => {
        if (response.status === HTTP.OK) {
          resolve(response.body);
        } else {
          reject(response);
        }
      })
    })
  },

  logout: user => {
    return new Promise((resolve, reject) => {
      unirest
      .post(`${URL_TO_API}/user/logout`)
      .header('Content-Type', 'application/json')
      .send({
        email: user.email,
        token: user.token
      })
      .end(response => {
        /*if (response.status === HTTP.OK) {
          resolve(response.body);
        } else {
          reject(response);
        }*/
        resolve();
      })
    })
  }
}
