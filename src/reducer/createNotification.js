import { CREATE_NOTIFICATION_REQUEST ,CREATE_NOTIFICATION_SUCCESS , CREATE_NOTIFICATION_FAILURE} from "../actionTypes/createNotification.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const createNotification = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTIFICATION_REQUEST:
      return {
        ...state, fetching : true , data: ''
      };
    case CREATE_NOTIFICATION_SUCCESS:
      return {
          ...state, fetching: false,  data: action.payload
      };
     case CREATE_NOTIFICATION_FAILURE:
        return {
            ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default createNotification;
