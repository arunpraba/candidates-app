import React from 'react';

const Loader = ({ isLoading }) =>
  isLoading && <p className="loading">Loading</p>;

export default Loader;
