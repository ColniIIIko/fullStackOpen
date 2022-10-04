import React from 'react';
import Part from './Part';

function Contents({ parts }) {
  return (
    <>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </>
  );
}

export default Contents;
