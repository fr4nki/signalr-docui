import React, { memo } from 'react';
import classNames from 'classnames';

import { ConnectionStruct } from '~/Containers/Connections';

import { Classnames } from '~/Utils/Types';

import style from './style.module.css';

interface Props {
  className?: Classnames;
  structs?: ConnectionStruct;
}

const StructList:React.FC<Props> = ({
  className,
  structs = {},
}) => {
  return (
    <div {...{
      className: classNames(
        style.container,
        className,
      ),
    }}>
      <pre>
        { JSON.stringify(structs, null, 2) }
      </pre>
    </div>
  );
};

export default memo(StructList);
