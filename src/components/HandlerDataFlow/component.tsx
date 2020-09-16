import React, { memo } from 'react';
import classNames from 'classnames';

import { Classnames } from '~/Utils/Types';

import style from './style.module.css';

interface Props {
  className?: Classnames;
  data: {
    id: string;
    data: any;
  }[];
}

const HandlerDataFlow:React.FC<Props> = ({
  className,
  data,
}) => {
  return (
    <div {...{
      className: classNames(
        style.container,
        className,
      ),
    }}>
      {
        data.length
          ? (
            data.map((d) => (
              <p {...{
                key: d.id,
                className: style.dataItem,
              }}>
                {JSON.stringify(d.data)}
              </p>
            ))
          )
          : 'No data'
      }
    </div>
  );
};

export default memo(HandlerDataFlow);
