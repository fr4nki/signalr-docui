import React, { memo } from 'react';
import classNames from 'classnames';

import { Classnames } from '~/Utils/Types';

import style from './style.module.css';

interface Props {
  className?: Classnames;
}

const Divider:React.FC<Props> = ({
  className,
}) => {
  return (
    <div {...{
      className: classNames(
        style.container,
        className,
      ),
    }} />
  );
};

export default memo(Divider);
