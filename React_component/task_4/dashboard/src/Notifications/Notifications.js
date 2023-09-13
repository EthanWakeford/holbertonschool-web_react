import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import './Notifications.css';
import { Component } from 'react';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className='menuItem'>Your notifications</div>
        {displayDrawer && (
          <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button
              style={{ float: 'right' }}
              aria-label='close'
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src='./holbie.ico' alt='idk'></img>
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
                    markAsRead={() => this.markAsRead(notification.id)}
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
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
