import * as actionsTypes from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.LOGIN:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.user,
      };
    case actionsTypes.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    case actionsTypes.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case actionsTypes.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    case actionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case actionsTypes.LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
