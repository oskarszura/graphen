// @flow
import React from "react";
import classNames from "classnames";
import Tooltip from "../Tooltip";

type Props = {
  className?: string,
  children?: React$Element<any>,
  type?: string,
  message?: string
};

function Validation(props: Props) {
  const { message, children, className, type } = props;
  const validationClasses = classNames(className, "gc-validation");

  return (
    <div className={validationClasses}>
      {children}
      <Tooltip className="gc-validation__message" type={type}>
        {message}
      </Tooltip>
    </div>
  );
}

export default Validation;
