import { SAMPLE_REQUEST ,SAMPLE_SUCCESS , SAMPLE_FAILURE} from "../actionTypes/sample.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const sample = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_REQUEST:
      return {
        ...state, fetching : true , data: ''
      };
    case SAMPLE_SUCCESS:
      return {
          ...state, fetching: false,  data: action.payload
      };
     case SAMPLE_FAILURE:
        return {
            ...state ,fetching:false , error : action.error
        };
      default:
      return state;
    }
  }
export default sample;
