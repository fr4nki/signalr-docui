import React from 'react';
import classNames from 'classnames';

import { StatusTypes } from './constants';
import style from './style.module.css';

interface Props {
  status: StatusTypes,
  simple?: boolean;
  className?: string | string[];
}

const mapToStyle: Record<StatusTypes, string> = {
  [StatusTypes.offline]: style.offline,
  [StatusTypes.online]: style.online,
  [StatusTypes.progress]: style.progress,
  [StatusTypes.error]: style.error,
};

const Status:React.FC<Props> = ({
  status,
  simple,
  className,
}) => {
  return (
    <div {...{
      className: classNames(
        style.container,
        className,
      ),
    }}>
      <span {...{
        className: classNames(
          style.status,
          mapToStyle[status],
        ),
      }} />

      {
        !simple && (
          <span {...{
            className: style.text,
          }}>
            {status}
          </span>
        )
      }
    </div>
  );
};

export default Status;
