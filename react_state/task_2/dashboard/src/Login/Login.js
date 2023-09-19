import { StyleSheet, css } from 'aphrodite';
import { Component } from 'react';
import AppContext from '../App/AppContext';

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
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    console.log('logging in');
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
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
    const { logIn } = this.props;
    const { email, password } = this.state;

    return (
      <main className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form
          name='login'
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   logIn(email, password);
          // }}
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

Login.contextType = AppContext;
