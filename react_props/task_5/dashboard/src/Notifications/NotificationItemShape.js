import PropTypes from 'prop-types';

export default NotificationItemShape = PropTypes.shape =
  {
    id: PropTypes.number.isRequired,
    html: PropTypes.object.shape({
      __html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
  };
