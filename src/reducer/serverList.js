import { SERVER_LIST_REQUEST ,SERVER_LIST_SUCCESS , SERVER_LIST_FAILURE} from "../actionTypes/serverList.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const serverList = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_LIST_REQUEST:
      return {
        ...state, fetching : true , data: ''
      };
    case SERVER_LIST_SUCCESS:
      return {
          ...state, fetching: false,  data: action.payload
      };
     case SERVER_LIST_FAILURE:
        return {
            ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default serverList;
