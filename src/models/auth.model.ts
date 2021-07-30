import { instance } from '../utils/axios.utils';

export const signup = (data: any) => {
  const promise = new Promise((resolve, reject) => {
    instance().post('/auth/sign_up', data).then((user) => {
      resolve(user);
    }).catch(err => {
      if (err.response) {
        reject(err.response);
      } else {
          reject(err);
      }
    })
  })
  return promise;
}

export const login = (data: any) => {
  const promise = new Promise((resolve, reject) => {
    instance().post('/auth/login', data).then((user) => {
      resolve(user);
    }).catch(err => {
      if (err.response) {
        reject(err.response);
      } else {
          reject(err);
      }
    })
  })
  return promise;
}

export const logout = (id: string) => {
  const promise = new Promise((resolve, reject) => {
    instance().post('/auth/logout/').then((user) => {
      resolve(user);
    }).catch(err => {
      if (err.response) {
        reject(err.response);
      } else {
          reject(err);
      }
    })
  })
  return promise;
}

export const forgetPassword = (data: any) => {
  const promise = new Promise((resolve, reject) => {
    instance().post('/auth/forget_password', data).then((user) => {
      resolve(user);
    }).catch(err => {
      if (err.response) {
        reject(err.response);
      } else {
          reject(err);
      }
    })
  })
  return promise;
}

export const resetPassword = (data: any) => {
  const promise = new Promise((resolve, reject) => {
    instance().post('/auth/reset_password', data).then((user) => {
      resolve(user);
    }).catch(err => {
      if (err.response) {
        reject(err.response);
      } else {
          reject(err);
      }
    })
  })
  return promise;
}