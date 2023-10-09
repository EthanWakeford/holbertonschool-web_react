import * as notifications from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

function normalizeData() {
  const user = new schema.Entity('users');
  const message = new schema.Entity(
    'messages',
    {},
    {
      idAttribute: 'guid',
    }
  );
  const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
  });
  return normalize(notifications, [notification]);
}

function getAllNotificationsByUser(userId) {
  const normalizedData = normalizeData();

  return normalizedData.entities.users.find((id) => id === userId);
}

export { normalizeData };
export default getAllNotificationsByUser;
