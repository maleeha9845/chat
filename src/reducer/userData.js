import { USER_DATA_REQUEST ,USER_DATA_SUCCESS ,  USER_DATA_FAILURE} from "../actionTypes/userData.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const  userData = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return {
        ...state, fetching : true , data: ''
      };
    case USER_DATA_SUCCESS:
      return {
          ...state, fetching: false,  data: action.payload
      };
     case  USER_DATA_FAILURE:
        return {
            ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default userData;
