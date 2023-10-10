import { Component } from 'react';
import PropTypes from 'prop-types';

export default class BodySection extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className='BodySection'>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string,
};

BodySection.defaultProps = {
  title: 'title',
};
