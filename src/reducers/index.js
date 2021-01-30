import {combineReducers} from 'redux';
import auth from './auth'
import profile from './profile'
import report from './report'
import admin from './admin'

export default combineReducers({
   auth,
   profile,
   report,
   admin
});