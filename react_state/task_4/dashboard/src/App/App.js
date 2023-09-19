import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../Utils/utils';
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import 'react';
import AppContext from './AppContext';

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  appLink: {
    color: '#61dafb',
  },
  body: {},
  footer: {},
});

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: () => this.logOut(),
      listNotifications: listNotifications,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPress.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPress.bind(this));
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    console.log(email, password);
    this.setState({
      user: {
        ...this.state.user,
        isLoggedIn: true,
        email: email,
        password: password,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  }

  markNotificationAsRead(id) {
    // removes item from listNotifications that matches ID
    const copyListNotif = this.state.listNotifications.filter(
      (notif) => notif.id !== id
    );

    this.setState({ listNotifications: [...copyListNotif] });
  }

  keyPress(e) {
    if (e.ctrlKey && e.key === 'h') {
      this.state.logOut();
      alert('Logging you out');
    }
  }

  render() {
    const { displayDrawer, listNotifications, user } = this.state;
    // console.log('HφΣ');

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <AppContext.Provider
        value={{ user: this.state.user, logOut: this.state.logOut }}
      >
        <Notifications
          listNotifications={listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer.bind(this)}
          handleHideDrawer={this.handleHideDrawer.bind(this)}
        />
        <Header />
        {user.isLoggedIn ? (
          <BodySectionWithMarginBottom title={'Course list'}>
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title={'Log in to continue'}>
            <Login logIn={this.logIn} />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title={'News from the School'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dicta in distinctio voluptatem tenetur doloremque dolorem corrupti,
            illo sint nihil rem velit nesciunt porro nemo laudantium praesentium
            natus eum? Fuga.
          </p>
        </BodySection>
        <Footer />
      </AppContext.Provider>
    );
  }
}

export default App;
