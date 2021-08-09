import { CHANGE_MEDIA_SERVER_REQUEST ,CHANGE_MEDIA_SERVER_SUCCESS , CHANGE_MEDIA_SERVER_FAILURE} from "../actionTypes/changeMediaServer.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const changeMediaServer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MEDIA_SERVER_REQUEST:
      return {
        ...state, fetching : true , data: ''
      };
    case CHANGE_MEDIA_SERVER_SUCCESS:
      return {
          ...state, fetching: false,  data: action.payload
      };
     case CHANGE_MEDIA_SERVER_FAILURE:
        return {
            ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default changeMediaServer;
