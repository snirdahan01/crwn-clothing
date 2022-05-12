import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    return <Child {...props} navigate={navigate} location={location} />;
  };
}
