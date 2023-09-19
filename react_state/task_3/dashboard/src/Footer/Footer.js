import { getFullYear, getFooterCopy } from '../Utils/utils';
import { useContext } from 'react';
import AppContext from '../App/AppContext';
// import {Style}
// import './Footer.css';

export default function Footer() {
  const { user, logOut } = useContext(AppContext);

  return (
    <footer className='App-footer'>
      {user.isLoggedIn && (
        <p>
          <a href=''>Contact us</a>
        </p>
      )}
      <p>
        <i>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </i>
      </p>
    </footer>
  );
}
