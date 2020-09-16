import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Heading from '~/Components/Heading';
import Navigation from '~/Components/Navigation';

import { routing as routingIndex } from '~/Pages/Index';
import { routing as routingHowItWorks } from '~/Pages/HowItWorks';
import { routing as routingError } from '~/Pages/Error';

import { RouteItem } from './constants';

import style from './style.module.css';

const RoutesManager: React.FC = (): React.ReactElement => {
  const routeList: RouteItem[] = [
    ...routingIndex,
    ...routingHowItWorks,
    ...routingError,
  ];

  return (
    <BrowserRouter>
      <Heading />

      <div {...{
        className: style.content,
      }}>
        <Navigation {...{
          items: routeList
            .map(({ path, name }) => ({ path, name }))
            .filter(({ path }) => path !== '*'),
        }} />

        <Switch>
          {
            routeList.map((current: RouteItem) => {
              const {
                path,
                props,
                exact,
                component,
              } = current;

              const Component = component;

              const routeProps: Record<string, any> = {
                path,
                key: path,
                render: () => <Component {...props} />,
              };

              if (exact !== undefined) {
                routeProps.exact = exact;
              }

              return (<Route {...routeProps} />);
            })
          }
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default RoutesManager;
