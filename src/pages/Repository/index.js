import React from 'react';

function Repository({ match }) {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}

export default Repository;
