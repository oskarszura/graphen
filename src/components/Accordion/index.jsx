// @flow
import React from "react";
import classNames from "classnames";

type Props = {
  className?: string,
  title: string,
  children?: React$Element<any>,
  isCollapsed?: boolean
};

type State = {
  isCollapsed: boolean
};

class Accordion extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const { isCollapsed } = props;
    this.state = {
      isCollapsed: isCollapsed || true
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  }

  render() {
    const { title, children, className } = this.props;
    const { isCollapsed } = this.state;

    const accordionClasses = classNames(className, "c-accordion");
    const contentClasses = classNames("c-accordion__content", {
      "c-accordion__content--collapsed": isCollapsed
    });
    const indicator = isCollapsed ? (
      <i className="c-icon c-icon--circle-right c-icon--medium" />
    ) : (
      <i className="c-icon c-icon--circle-down c-icon--medium" />
    );

    return (
      <article className={accordionClasses}>
        <header
          className="c-accordion__title"
          onClick={() => {
            this.handleClick();
          }}
        >
          {indicator} {title}
        </header>
        <div className={contentClasses}>{children}</div>
      </article>
    );
  }
}

export default Accordion;
