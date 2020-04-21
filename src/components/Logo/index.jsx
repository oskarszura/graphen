// @flow
import React from "react";
import classNames from "classnames";

type Props = {
  className?: string,
  onClick?: () => void
};

function Logo(props: Props) {
  const { onClick, className } = props;

  const logoClasses = classNames(className, "gc-logo");

  return (
    <span onClick={onClick} className={logoClasses}>
      CODA_
    </span>
  );
}

export default Logo;
