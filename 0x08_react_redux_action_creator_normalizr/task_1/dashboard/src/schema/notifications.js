import * as notifications from '../../../../notifications.json';

function getAllNotificationsByUser(userId) {
  return notifications
    .filter((notif) => notif.author.id === userId)
    .map((notif) => notif.context);
}

export default getAllNotificationsByUser;
