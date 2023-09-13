import { Component } from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySection.css';

export default class BodySectionWithMarginBottom extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className='bodySectionWithMargin'>
        <BodySection title={title}>{children}</BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

BodySectionWithMarginBottom.defaultProps = {
  title: 'title',
};
