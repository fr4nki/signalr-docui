import React, { memo } from 'react';
import classNames from 'classnames';
import * as signalR from '@microsoft/signalr';

import { ConnectionHandler } from '~/Containers/Connections';

import HandlerPayload from '~/Components/HandlerPayload';
import Divider from '~/Components/Divider';
import HandlerConnection from '~/Components/HandlerConnection';

import { Classnames } from '~/Utils/Types';

import style from './style.module.css';

interface Props {
  className?: Classnames;
  handler: ConnectionHandler;
  connection: signalR.HubConnection | undefined;
}

const HandlerMethod:React.FC<Props> = ({
  className,
  handler,
  connection,
}) => {
  return (
    <div {...{
      className: classNames(
        style.container,
        className,
      ),
    }}>
      <p {...{
        className: style.header,
      }}>
        <strong>
          {handler?.listener.method}
          {' '}
          /
          {' '}
          {handler?.sender.method}
        </strong>

        {
          handler?.description && (
            <>
              {' '}
              -
              {' '}
              {handler.description}
            </>
          )
        }
      </p>

      <div {...{
        className: style.actionBlock,
      }}>
        <p {...{
          className: style.action,
        }}>
          <span>
            &larr;
          </span>
          {' '}
          {handler.sender.method}
        </p>

        <HandlerPayload {...{
          payload: handler.sender.payload,
          className: style.payload,
        }} />
      </div>

      <div {...{
        className: style.actionBlock,
      }}>
        <p {...{
          className: style.action,
        }}>
          <span>
            &rarr;
          </span>
          {' '}
          {handler.listener.method}
        </p>

        <HandlerPayload {...{
          payload: handler.listener.payload,
          className: style.payload,
        }} />
      </div>

      <HandlerConnection {...{
        connection,
        sender: handler.sender,
        listener: handler.listener,
      }} />

      <Divider />
    </div>
  );
};

export default memo(HandlerMethod);
