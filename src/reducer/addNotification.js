import { ADD_NOTIFICATION_REQUEST ,ADD_NOTIFICATION_SUCCESS , ADD_NOTIFICATION_FAILURE} from "../actionTypes/addNotification.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const addNotification = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION_REQUEST:
      return {
        ...state, fetching : true , data: ''
      };
    case ADD_NOTIFICATION_SUCCESS:
      return {
          ...state, fetching: false,  data: action.payload
      };
     case ADD_NOTIFICATION_FAILURE:
        return {
            ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default addNotification;
