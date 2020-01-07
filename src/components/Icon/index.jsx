// @flow
import _ from "lodash";
import React from "react";
import classNames from "classnames";

type Props = {
  type: string,
  className: string
};

const Icon = (props: Props) => {
  const { type, className } = props;

  const classes = classNames("c-icon", className, {
    [`c-icon--${type}`]: !_.isEmpty(type)
  });

  return <span className={classes} />;
};

export default Icon;
