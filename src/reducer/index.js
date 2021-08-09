import { combineReducers } from 'redux'
import sample from "./sample.js";
import login from "./login.js";
import users from "./users.js";
import deleteUser from "./delete.js";
import changeMediaServer from "./changeMediaServer.js";
import serverList from "./serverList.js";
import userData from './userData.js';
import createNotification from './createNotification.js';
import addNotification from './addNotification.js';
import activeId from './activeId.js';


const reducers = combineReducers({
  sample :sample ,
  login:login,
  users:users,
  deleteUser:deleteUser,
  changeMediaServer:changeMediaServer,
  serverList:serverList,
  userData:userData,
  createNotification,
  addNotification,
  activeId:activeId,
});

export default reducers;
