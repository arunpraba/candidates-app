import React, { useEffect } from 'react';

const ShowError = ({ error, close }) => {
  useEffect(() => {
    setTimeout(() => {
      close();
    }, 2000);
  }, [close]);

  return (
    error && (
      <p className="error">
        {error}
        <span className="close" onClick={close}>
          &times;
        </span>
      </p>
    )
  );
};

export default ShowError;
