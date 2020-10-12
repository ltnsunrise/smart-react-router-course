import React from 'react';

const HomePage = ({ match, history, location }) => {
  console.log('match', match);
  console.log('history', history);
  console.log('location', location);
  return <div>HomePage</div>;
};

export default HomePage;
