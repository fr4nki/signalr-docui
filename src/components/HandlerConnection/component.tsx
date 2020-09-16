import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import * as signalR from '@microsoft/signalr';
import { HubConnectionState } from '@microsoft/signalr';

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
  sender: string;
  listener: string;
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
      connection.on(listener, (item: any) => {
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
                onSubmit: (formdata: string) => {
                  // eslint-disable-next-line no-unused-expressions
                  connection?.send(sender, formdata);
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
