import { USERS_REQUEST ,USERS_SUCCESS , USERS_FAILURE} from "../actionTypes/users.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return {
        ...state, fetching : true , data: ''
      };
    case USERS_SUCCESS:
      return {
          ...state, fetching: false,  data: action.payload
      };
     case USERS_FAILURE:
        return {
            ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default users;
