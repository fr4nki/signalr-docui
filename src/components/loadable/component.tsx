import React, { Suspense } from 'react';

const Loadable = (
  component: () => Promise<any>,
  fallback: React.ReactElement,
): React.ComponentType<any> => {
  const LoadedComponent = React.lazy(component);

  return (props: { [key: string]: any }) => (
    <Suspense {...{ fallback }}>
      <LoadedComponent {...props} />
    </Suspense>
  );
};

export default Loadable;
