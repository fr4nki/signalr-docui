import React from 'react';
import classNames from 'classnames';

import { ConnectionHandlerPayload } from '~/Containers/Connections';

import { Classnames } from '~/Utils/Types';

import style from './style.module.css';

interface Props {
  className?: Classnames;
  payload?: ConnectionHandlerPayload;
}

const HandlerPayload:React.FC<Props> = ({
  className,
  payload,
}) => {
  return (
    <div {...{
      className: classNames(
        style.container,
        className,
      ),
    }}>
      <p>
        Payload:
      </p>

      <pre>
        {JSON.stringify(payload, null, 2)}
      </pre>
    </div>
  );
};

export default HandlerPayload;
