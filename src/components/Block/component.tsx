import React from 'react';
import classNames from 'classnames';

import { Classnames } from '~/Utils/Types';

import style from './style.module.css';

interface Props {
  className?: Classnames;
  title: string | React.ReactElement;
}

const Block:React.FC<Props> = ({
  className,
  title,
  children,
}) => {
  return (
    <div {...{
      className: classNames(
        style.container,
        className,
      ),
    }}>
      <p {...{
        className: style.title,
      }}>
        {title}
      </p>

      <div {...{
        className: style.content,
      }}>
        {children}
      </div>
    </div>
  );
};

export default Block;
