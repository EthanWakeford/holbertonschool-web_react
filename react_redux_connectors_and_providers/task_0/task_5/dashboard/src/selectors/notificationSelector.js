export const filterTypeSelected = (state) => state.filter;

export const getNotifications = (state) => getIn(Map(state), ['notifications']);

export const getUnreadNotifications = (state) =>
  getIn(Map(state), ['notifications']).filter(
    (notification) => notification.isRead === false
  );
