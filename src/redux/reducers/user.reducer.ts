import { UPDATE_USER_LIST, UPDATE_USER } from '../types';
import { userInterface } from '../interface';

const initialState = {
  userList: [],
  user: {}
};

const UserReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_USER_LIST:
      let userList: any = [ ...action.payload ];
      state.userList = userList;
      return state;
    case UPDATE_USER:
      let user: any = {...state.user }
      user = { ...user, ...action.payload }
      state.user = user;
      return state;
    default:
      return state;
  }
}

export default UserReducers;