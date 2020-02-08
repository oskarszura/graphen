// @flow
import React from "react";
import classNames from "classnames";

type Props = {
  link: string,
  className?: string,
  children?: React$Element<any>
};

function Link(props: Props) {
  const { link, className, children } = props;
  const classes = classNames("gc-link", className);

  return (
    <a href={link} className={classes}>
      {children}
    </a>
  );
}

export default Link;
