import React, { memo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import style from './style.module.css';

interface Props {
  className?: string | string[];
}

const Heading:React.FC<Props> = ({
  className,
}) => {
  return (
    <div {... {
      className: classNames(style.container, className),
    }}>
      <Link {...{
        to: '/',
        className: style.link,
      }}>
        <img {...{
          className: style.logo,
          src: `${process.env.PUBLIC_URL}/logo.svg`,
          alt: 'Logo',
        }} />
        SignalR DocUI
      </Link>
    </div>
  );
};

export default memo(Heading);
