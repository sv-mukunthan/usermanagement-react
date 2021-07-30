import { instance } from '../utils/axios.utils';

export const getUserByToken = () => {
  const promise = new Promise((resolve, reject) => {
    instance().post('/auth/get_user').then((user) => {
      resolve(user.data);
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

export const getUserById = (id: string) => {
  const promise = new Promise((resolve, reject) => {
    instance().get('/auth/get_user_by_id/'+id).then((user) => {
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

export const editUser = (data: any) => {
  const promise = new Promise((resolve, reject) => {
    instance().put('/auth/update', data).then((user) => {
      resolve(user.data);
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

export const userList = (data: any) => {
  const promise = new Promise((resolve, reject) => {
    instance().post('/auth/user_list', data).then((user) => {
      resolve(user.data);
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

export const deleteUser = (id: string) => {
  const promise = new Promise((resolve, reject) => {
    instance().delete('/auth/delete/'+id).then((user) => {
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