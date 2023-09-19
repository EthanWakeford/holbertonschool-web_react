import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const bounceKeyFrames = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(-5px)',
  },
};

const opacityKeyFrames = {
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
};

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed',
    borderColor: 'red',
    padding: '10px',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100vh',
      padding: 0,
    },
  },
  menuItem: {
    textAlign: 'end',
    transition: 'opacity 1s ease, transform 0.3s ease',
    ':hover': {
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
      animationName: [opacityKeyFrames, bounceKeyFrames],
    },
  },
  animation: {
    animationDuration: '0.5s, 1s',
    animationIterationCount: '3',
    animationName: [opacityKeyFrames, bounceKeyFrames],
  },
});

export default class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { markNotificationAsRead } = this.props;

    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
    return (
      <>
        {!displayDrawer && (
          <div
            className={css(styles.menuItem, styles.animation)}
            onClick={handleDisplayDrawer}
          >
            Your notifications
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <p>Here is the list of notifications</p>
            <button
              style={{ float: 'right' }}
              aria-label='close'
              onClick={() => console.log('Close button has been clicked')}
            >
              <img
                src='./holbie.ico'
                alt='idk'
                onClick={handleHideDrawer}
              ></img>
            </button>
            <ul>
              {!listNotifications ? (
                <li>No new notification for now</li>
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    type={notification.type}
                    value={notification.value}
                    key={notification.id}
                    html={notification.html}
                    markAsRead={() => markNotificationAsRead(notification.id)}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};
