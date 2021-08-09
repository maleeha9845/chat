import { all, takeLatest, takeEvery} from 'redux-saga/effects';

// saga Workers
import sampleApiWorker from './sample.js';
import loginWorker from './login.js';
import usersApiWorker from './users.js';
import deleteUserWorker from './delete.js';
import changeMediaServerWorker from './changeMediaServer.js';
import serverListWorker from './serverList.js';
import userDataWorker from './userData.js';
import createNotificationWorker from './createNotification.js';
import addNotifacationWorker from './addNotification.js';

//  action actiontypes
import { SAMPLE_REQUEST} from "../actionTypes/sample.js";
import { LOGIN_REQUEST} from "../actionTypes/login.js";
import { USERS_REQUEST} from "../actionTypes/users.js";
import { DELETE_REQUEST} from "../actionTypes/delete.js";
import { CHANGE_MEDIA_SERVER_REQUEST} from "../actionTypes/changeMediaServer.js";
import { SERVER_LIST_REQUEST} from "../actionTypes/serverList.js";
import { USER_DATA_REQUEST} from "../actionTypes/userData.js";
import { CREATE_NOTIFICATION_REQUEST} from "../actionTypes/createNotification.js";
import { ADD_NOTIFICATION_REQUEST} from "../actionTypes/addNotification.js";

export default function* rootSaga(){
 yield all([
   yield takeLatest(SAMPLE_REQUEST ,sampleApiWorker),
   yield takeLatest(LOGIN_REQUEST ,loginWorker),
   yield takeLatest(USERS_REQUEST ,usersApiWorker),
   yield takeLatest(DELETE_REQUEST ,deleteUserWorker),
   yield takeLatest(CHANGE_MEDIA_SERVER_REQUEST ,changeMediaServerWorker),
   yield takeLatest(SERVER_LIST_REQUEST ,serverListWorker),
   yield takeLatest(USER_DATA_REQUEST ,userDataWorker),
   yield takeLatest(CREATE_NOTIFICATION_REQUEST ,createNotificationWorker),
   yield takeLatest(ADD_NOTIFICATION_REQUEST ,addNotifacationWorker),
     ])
}
