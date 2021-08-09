import { CREATE_NOTIFICATION_REQUEST } from '../actionTypes/createNotification.js'

const createNotificationRequest = data => ({
  type:CREATE_NOTIFICATION_REQUEST ,
  payload: data,
});

export default createNotificationRequest;
