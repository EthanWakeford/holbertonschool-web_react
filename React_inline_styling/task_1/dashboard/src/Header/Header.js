import { StyleSheet, css } from 'aphrodite';

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
  return (
    <header className={css(styles.header)}>
      <div className={css(styles.logo)}></div>
      <h1 className={css(styles.headerHeading)}>School dashboard</h1>
    </header>
  );
}
