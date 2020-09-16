import React, { useEffect, useState, memo } from 'react';
import classNames from 'classnames';
import * as signalR from '@microsoft/signalr';

import { ConnectionConfig } from '~/Containers/Connections';

import Status, { StatusTypes } from '~/Components/Status';
import Notifier, { NotifierTypes } from '~/Components/Notifier';
import Button from '~/Components/Button';
import Block from '~/Components/Block';
import StructList from '~/Components/StructList';
import HandlerMethod from '~/Components/HandlerMethod';

import style from './style.module.css';

interface Props {
  className?: string | string[];
  active: boolean;
  name?: string;
  description?: string;
  config: ConnectionConfig | undefined;
}

let connection: signalR.HubConnection | undefined;

const Handler:React.FC<Props> = ({
  className,
  active,
  name,
  description,
  config,
}) => {
  const [status, setStatus] = useState<StatusTypes>(StatusTypes.offline);

  const currentName = config?.about?.name || name || '';
  const currentDescription = config?.about?.description || description || '';

  useEffect(() => {
    if (config?.endpoint) {
      connection = new signalR.HubConnectionBuilder()
        .withUrl(config?.endpoint)
        .withAutomaticReconnect([0, 1000, 5000])
        .build();
    }
  }, []);

  if (!config) {
    return (
      <Notifier {...{
        type: NotifierTypes.error,
        content: 'Config not exists. Check your connection',
      }} />
    );
  }

  return (
    <div {...{
      className: classNames(
        style.container,
        { [style.containerActive]: active },
        className,
      ),
    }}>
      <div>
        <div {...{
          className: style.head,
        }}>
          <div {...{
            className: style.headleft,
          }}>
            <Status {...{
              className: style.status,
              status,
            }} />

            <Button {...{
              className: style.statusButton,
              text: (
                status === StatusTypes.offline
                  ? 'On'
                  : 'Off'
              ),
              onClick: () => {
                if (connection) {
                  if (status === StatusTypes.offline) {
                    try {
                      setStatus(StatusTypes.progress);

                      connection
                        .start()
                        .then(() => { setStatus(StatusTypes.online); })
                        .catch(() => { setStatus(StatusTypes.error); });
                    } catch (e) {
                      setStatus(StatusTypes.error);
                    }
                  } else {
                    connection
                      .stop()
                      .finally(() => {
                        setStatus(StatusTypes.offline);
                      });
                  }
                }
              },
            }} />
          </div>

          <div {...{
            className: style.headright,
          }}>
            {
              currentName && (
                <p {...{
                  className: style.name,
                }}>
                  {currentName}
                </p>
              )
            }

            {
              currentDescription && (
                <p {...{
                  className: style.description,
                }}>
                  {currentDescription}
                </p>
              )
            }

            <p {...{
              className: style.endpoint,
            }}>
              {config.endpoint}
            </p>
          </div>
        </div>
      </div>

      {
        config.handlers && (
          <Block {...{
            title: 'Handlers',
            className: style.block,
          }}>
            {
              config.handlers.map((handler) => (
                <HandlerMethod {...{
                  key: handler.listener.method + handler.sender.method,
                  handler,
                  connection,
                }} />
              ))
            }
          </Block>
        )
      }

      {
        config.structs && (
          <Block {...{
            title: 'Structs',
            className: style.block,
          }}>
            <StructList {...{
              structs: config.structs,
            }} />
          </Block>
        )
      }
    </div>
  );
};

export default memo(Handler);
