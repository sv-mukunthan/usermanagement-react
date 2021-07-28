import { UPDATE_USER } from '../types';
import { userInterface } from '../interface';

const initialState = {};

const UserReducers = (state = initialState, action: userInterface) => {
  switch (action.type) {
    case UPDATE_USER:
      let newState = { ...state }
      newState = { ...newState, ...action.payload }
      return newState
    default:
      return state;
  }
}

export default UserReducers;