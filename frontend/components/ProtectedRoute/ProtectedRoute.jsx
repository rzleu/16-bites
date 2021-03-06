import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ path, component }) {
  const currentUser = useSelector((state) => state.session?.id);
  return (
    <>
      {currentUser ? (
        <Route path={path} component={component} />
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
}

export default ProtectedRoute;
