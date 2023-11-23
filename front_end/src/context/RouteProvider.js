import React, { useState } from 'react';
import RouteContext from './RouteContext';

const RouteProvider = ({ children }) => {
  const [route, setRoute] = useState([]);

  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
