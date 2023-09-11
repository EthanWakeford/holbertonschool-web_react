import PropTypes from 'prop-types';

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
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};
