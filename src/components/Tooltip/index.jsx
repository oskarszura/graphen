// @flow
import React from "react";
import classNames from "classnames";

type Props = {
  className?: string,
  children?: React$Element<any>,
  type?: string,
  message?: string,
};

function Tooltip(props: Props) {
  const { message, children, className, type } = props;
  const validationClasses = classNames(className, "gc-tooltip");
  const tooltipClasses = classNames("gc-tooltip__message", {
    "gc-tooltip__message--success": type === "success",
    "gc-tooltip__message--danger": type === "danger",
  });

  return <div className={validationClasses}>
    {children}
    <div className={tooltipClasses}>{message}</div>
  </div>;
}

export default Tooltip;
