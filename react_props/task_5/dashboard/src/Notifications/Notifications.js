import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {
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
            {/* <NotificationItem type={'default'} value={'New course available'} />
            <NotificationItem type={'urgent'} value={'New resume available'} />
            <NotificationItem
              type={'urgent'}
              html={{ __html: getLatestNotification() }}
            /> */}
            {!listNotifications ? (
              <li>No new notification for now</li>
            ) : (
              listNotifications.map((notification) => (
                <NotificationItem
                  type={notification.type}
                  value={notification.value}
                  key={notification.id}
                  html={notification.html}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
