import React from 'react';

export const renderErrors = (errors) => (
  <ul>
    {errors.map((error, idx) => (
      <li key={`${error}-${idx}`}>{error}</li>
    ))}
  </ul>
);
