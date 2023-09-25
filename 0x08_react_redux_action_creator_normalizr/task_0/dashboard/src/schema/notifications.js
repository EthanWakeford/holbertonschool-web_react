import * as notifications from '../../../../notifications.json';

function getAllNotificationsByUser(userId) {
  notificationsData = JSON.parse(notifications);

  return notificationsData
    .filter((notif) => notif.author.id === userId)
    .map((notif) => notif.context);
}

export { getAllNotificationsByUser };
