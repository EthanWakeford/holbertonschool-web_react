import './Notifications.css';
import { getLatestNotification } from '../Utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({ displayDrawer }) {
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
            <NotificationItem type={'default'} value={'New course available'} />
            <NotificationItem type={'urgent'} value={'New resume available'} />
            <NotificationItem
              type={'urgent'}
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.string,
};

Notifications.defaultProps = {
  displayDrawer: false,
};
