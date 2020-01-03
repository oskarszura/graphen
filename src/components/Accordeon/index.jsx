// @flow
import React from "react";
import classNames from "classnames";

type Props = {
  title: string,
  children?: React$Element<any>,
};

type State = {
  isCollapsed: boolean,
};

class Accordeon extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      isCollapsed: false,
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  }

  render() {
    const { title, children } = this.props;
    const { isCollapsed } = this.state;

    const contentClasses = classNames('c-accordeon__content', {
      'c-accordeon__content--collapsed': isCollapsed,
    });
    const indicator = isCollapsed ? '+' : '-';

    return (
      <article className='c-accordeon'>
        <header
          className='c-accordeon__title'
          onClick={() => { this.handleClick(); }}
        >
          {title} ({indicator})
        </header>
        <div style={{height: 100}} className={contentClasses}>
          {children}
        </div>
      </article>
    );
  }
}

export default Accordeon;
