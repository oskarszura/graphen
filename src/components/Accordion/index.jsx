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
      <i className="c-icon c-icon--menu c-icon--large" />
    ) : (
      <i className="c-icon c-icon--menu3 c-icon--large" />
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
        <div style={{ height: 100 }} className={contentClasses}>
          {children}
        </div>
      </article>
    );
  }
}

export default Accordion;
