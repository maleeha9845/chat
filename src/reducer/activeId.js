import { ACTIVE_ID_REQUEST ,ACTIVE_ID_SUCCESS , ACTIVE_ID_FAILURE} from "../actionTypes/activeId.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const activeId = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_ID_REQUEST:
      return {
        ...state, fetching : true , data: action.payload
      };
    case ACTIVE_ID_SUCCESS:
      return {
          ...state, fetching: false,  data: action.payload
      };
     case ACTIVE_ID_FAILURE:
        return {
            ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default activeId;
