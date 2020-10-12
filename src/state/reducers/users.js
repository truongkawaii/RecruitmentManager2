import { Actions } from '../actions';

const initialState = {
  data: null,
};

function listUser(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_LIST_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return { ...state };
  }
}
export default listUser;
