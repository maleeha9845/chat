import { ADD_NITIFICATION_REQUEST } from '../actionTypes/addNotification.js'

const addNotificationRequest = data => ({
  type:ADD_NITIFICATION_REQUEST ,
  payload: data,
});

export default addNotificationRequest;
