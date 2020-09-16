import React from 'react';
import classNames from 'classnames';

import { LoaderType } from './constants';

import style from './style.module.css';

interface Props {
  className?: string;
  type?: LoaderType
}

const mapTypeToStyle = {
  [LoaderType.inline]: style.inline,
  [LoaderType.fullscreen]: style.fullscreen,
};

const Loader:React.FC<Props> = ({
  className,
  type = LoaderType.inline,
}) => (
  <div {...{
    className: classNames(style.container, className, mapTypeToStyle[type]),
  }}>
    <div {...{
      className: style.loaderWrapper,
    }}>
      <div {...{
        className: style.loader,
      }} />
    </div>
  </div>
);

export default Loader;
