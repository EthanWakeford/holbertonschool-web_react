import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function NotificationItem({ type, html, value }) {
  return (
    <>
      <li data-notification-type={type} dangerouslySetInnerHTML={html}>
        {value}
      </li>
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.objectOf(NotificationItemShape),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};
