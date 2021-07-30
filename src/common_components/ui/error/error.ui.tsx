import React from 'react';
import './error.ui.scss';

const Error = (props: any) => {
  const { children } = props;
  return <div className="error h5">{children}</div>;
};

export default Error;
