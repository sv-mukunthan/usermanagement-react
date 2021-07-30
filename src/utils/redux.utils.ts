import store from '../redux/store';
import { UPDATE_USER_LIST, UPDATE_USER } from '../redux/types';

export const setUserList = (payload: any[]) => {
  store.dispatch({
    type: UPDATE_USER_LIST,
    payload: payload
  })
}

export const setUser = (payload: any[]) => {
  store.dispatch({
    type: UPDATE_USER,
    payload: payload
  })
}