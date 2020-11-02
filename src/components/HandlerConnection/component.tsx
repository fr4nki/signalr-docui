import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import * as signalR from '@microsoft/signalr';
import { HubConnectionState } from '@microsoft/signalr';

import { ConnectionHandlerAction } from '~/Containers/Connections';

import HandlerSendForm from '~/Components/HandlerSendForm';
import HandlerDataFlow from '~/Components/HandlerDataFlow';

import { Classnames } from '~/Utils/Types';

import style from './style.module.css';

interface ItemData {
  id: string;
  data: any;
}

interface Props {
  className?: Classnames;
  connection: signalR.HubConnection | undefined;
  sender: ConnectionHandlerAction;
  listener: ConnectionHandlerAction;
}

const HandlerConnection:React.FC<Props> = ({
  className,
  connection,
  sender,
  listener,
}) => {
  const [data, setData] = useState<ItemData[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (connection) {
      connection.on(listener.method, (item: any) => {
        const dataItem = {
          id: String(+new Date()),
          data: item,
        };

        setData((prevData) => prevData.concat(dataItem));
      });
    }
  }, [connection]);

  useEffect(() => {
    setIsConnected(connection?.state === HubConnectionState.Connected);
  }, [connection?.state]);

  return (
    <div {...{
      className: classNames(
        style.container,
        className,
      ),
    }}>
      {
        isConnected
          ? (
            <>
              <HandlerDataFlow {...{
                data,
              }} />

              <HandlerSendForm {...{
                payload: sender.payload,
                onSubmit: (formdata: string[]) => {
                  // eslint-disable-next-line no-unused-expressions
                  connection?.send(sender.method, ...formdata);
                },
              }} />
            </>
          )
          : (
            <p>
              You are not connected
            </p>
          )
      }
    </div>
  );
};

export default memo(HandlerConnection);
