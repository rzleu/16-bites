import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ path, component }) {
  const currentUser = useSelector((state) => state.session?.id);
  return <>{currentUser && <Route path={path} component={component} />}</>;
}

export default ProtectedRoute;
