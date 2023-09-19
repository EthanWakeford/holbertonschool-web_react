import { StyleSheet, css } from 'aphrodite';
import { Component } from 'react';

const styles = StyleSheet.create({
  appBody: {
    margin: 0,
  },
  form: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  submit: {
    width: '2em',
  },
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    if (e.target.value && this.state.password) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
    if (this.state.email && e.target.value) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  render() {
    return (
      <main className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form
          name='login'
          onSubmit={this.handleLoginSubmit}
          className={css(styles.form)}
        >
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' onChange={this.handleChangeEmail} />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={this.handleChangePassword}
          />
          <input
            type='submit'
            value='ok'
            className={css(styles.submit)}
            disabled={!this.state.enableSubmit}
          />
        </form>
      </main>
    );
  }
}
