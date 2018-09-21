import React from 'react';

const wrapperfunc = (WrappedComponent, style) => {
  class WrapperFunc extends React.Component {
    render () {
      return (
        <div className={style}>
          <WrappedComponent ref={this.forwardedRef} {...this.props} />
        </div>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <WrapperFunc {...props} forwardedRef={ref} />;
  });
};

export default wrapperfunc;
