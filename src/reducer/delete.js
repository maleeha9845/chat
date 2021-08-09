import { DELETE_REQUEST ,DELETE_SUCCESS , DELETE_FAILURE} from "../actionTypes/delete.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const deleteUser = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_REQUEST:
      return {
        ...state, fetching : true , data: ''
      };
    case DELETE_SUCCESS:
      return {
          ...state, fetching: false,  data: action.payload
      };
     case DELETE_FAILURE:
        return {
            ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default deleteUser;