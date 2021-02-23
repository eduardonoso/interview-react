import React from 'react';

const Body = (props) => {
  return <body style={{maxWidth: 800, textAlign: 'center', margin: '0 auto', }}>{props.children}</body>
};

export default Body;
