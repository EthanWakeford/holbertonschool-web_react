import { StyleSheet, css } from 'aphrodite';
import { useContext } from 'react';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  logo: {
    height: '200px',
    width: '200px',
    backgroundSize: 'cover',
    pointerEvents: 'none',
    // backgroundImage: url('../assets/holbie.jpg'),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
    gap: '10%',
    fontSize: 'calc(10px + 2vmin)',
    color: 'red',
    borderBottom: '0.5rem solid',
    borderColor: 'red',
    verticalAlign: 'middle',
  },
  headerHeading: {
    fontSize: 'xx-large',
    textAlign: 'end',
    lineHeight: '200px',
  },
});

export default function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <header className={css(styles.header)}>
      {user.isLoggedIn && (
        <div>
          <p>Welcome {user.email}</p>
          <button onClick={logOut}>log Out</button>
        </div>
      )}
      <div className={css(styles.logo)}></div>
      <h1 className={css(styles.headerHeading)}>School dashboard</h1>
    </header>
  );
}
