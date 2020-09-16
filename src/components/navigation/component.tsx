import React, { memo } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import style from './style.module.css';

interface Props {
  className?: string | string[];
  items?: { name: string, path: string }[];
}

const Navigation:React.FC<Props> = ({
  className,
  items,
}) => {
  const { pathname } = useLocation();

  return (
    <div {...{
      className: classNames(style.container, className),
    }}>
      {
        items?.map((item) => (
          <Link {...{
            key: item.path,
            to: item.path,
            className: classNames(style.item, { [style.itemActive]: item.path === pathname }),
          }}>
            { item.name }
          </Link>
        ))
      }
    </div>
  );
};

export default memo(Navigation);
