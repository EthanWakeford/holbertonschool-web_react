import * as notificationActionTypes from './notificationActionTypes';

export function markAsAread(index) {
  return {
    type: notificationActionTypes.MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: notificationActionTypes.SET_TYPE_FILTER,
    filter,
  };
}
