import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../Utils/utils';
import { Component } from 'react';

class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.keyPress.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPress.bind(this));
  }

  keyPress(e) {
    if (e.ctrlKey && e.key === 'h') {
      this.props.logOut();
      alert('Logging you out');
    }
  }

  render() {
    const { isLoggedIn, logOut } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <Header />
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title={'Course list'}>
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title={'Log in to continue'}>
            <Login />
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
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
