import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    margin: 0,
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  button: {
    width: '2em',
  },
});

export default function Login() {
  return (
    <main className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email'></input>
      <label htmlFor='password'>Password</label>
      <input type='password' name='password'></input>
      <button className={css(styles.button)}>OK</button>
    </main>
  );
}
