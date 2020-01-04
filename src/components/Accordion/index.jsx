// @flow
import React from "react";
import classNames from "classnames";

type Props = {
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
    const { title, children } = this.props;
    const { isCollapsed } = this.state;

    const contentClasses = classNames("c-accordion__content", {
      "c-accordion__content--collapsed": isCollapsed
    });
    const indicator = isCollapsed ? "+" : "-";

    return (
      <article className="c-accordion">
        <header
          className="c-accordion__title"
          onClick={() => {
            this.handleClick();
          }}
        >
          {title} ({indicator})
        </header>
        <div style={{ height: 100 }} className={contentClasses}>
          {children}
        </div>
      </article>
    );
  }
}

export default Accordion;
