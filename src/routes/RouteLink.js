import React from 'react';
import { useHistory, Link } from 'react-router-dom';

function RouteLink(props) {
  const history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    props.href && history.push(props.href);
  };

  return <Link {...props} onClick={handleClick} />;
}

export default RouteLink;