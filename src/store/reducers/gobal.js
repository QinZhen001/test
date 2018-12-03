import { handleActions } from 'redux-actions';
import { SET_SESSION_ID, SET_OPEN_ID } from '../types/gobal';

export default handleActions({
  [SET_SESSION_ID](state, action) {
    return {
      ...state,
      sessionId: action.payload
    };
  },
  [SET_OPEN_ID](state, action) {
    return {
      ...state,
      openId: action.payload
    };
  }
}, {
  sessionId: '',
  openId: ''
});
