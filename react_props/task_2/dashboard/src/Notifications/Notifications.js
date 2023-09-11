import './Notifications.css';
import { getLatestNotification } from '../Utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
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
        {/* <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          data-priority='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li> */}
        <NotificationItem type={'default'} value={'New course available'} />
        <NotificationItem type={'urgent'} value={'New resume available'} />
        <NotificationItem
          type={'urgent'}
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}
