import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifItem: {
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: 'solid black',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
  default: {
    color: 'slateblue',
  },
  urgent: {
    color: 'red',
  },
});

export default class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead } = this.props;

    return (
      <>
        <li
          onClick={markAsRead}
          // data-notification-type={type}
          className={css(styles.notifItem, styles[type])}
          dangerouslySetInnerHTML={html}
        >
          {value}
        </li>
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.objectOf(NotificationItemShape),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};
