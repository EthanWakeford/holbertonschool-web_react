import { Component } from 'react';

export default hoc = (WrappedComponent) => {
  class NewComponent extends Component {
    componentDidMount() {
      console.log(this);
      console.log(`Component ${this.constructor.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.constructor.name} is going to unmount`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return NewComponent;
};
