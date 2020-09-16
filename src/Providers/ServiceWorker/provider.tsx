import React from 'react';

import * as serviceWorker from './serviceWorker';

const Provider: React.FC = ({
  children,
}) => {
  serviceWorker.unregister();

  return (
    <>
      { children }
    </>
  );
};

export default Provider;
