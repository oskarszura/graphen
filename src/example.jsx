// @flow
import _ from "lodash";
import React from "react";
import { render } from "react-dom";
import {
  Button,
  Dialog,
  Icon,
  Input,
  Link,
  Loader,
  Scroller,
  Joystick,
  Accordion,
  Validation,
  Tooltip
} from "./index";

const appContainer = document.querySelector(".js-example");

type Props = {};

type State = {
  isDialogVisible: boolean
};

class ExampleApp extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDialogVisible: false
    };
  }

  handleShowDialog() {
    this.setState(() => ({
      isDialogVisible: true
    }));
  }

  handleHideDialog() {
    this.setState(() => ({
      isDialogVisible: false
    }));
  }

  render() {
    const { isDialogVisible } = this.state;

    return (
      <>
        <article className="tst-colors gc-panel gc-panel--separator">
          <header className="gc-panel__title">Colors</header>
          <div className="gc-panel__content">
            <ul className="gc-list">
              <li className="gc-list__item">
                <div className="tst-colors-primary gc-sample gc-sample--brand-primary" />{" "}
                - Brand color primary / $gb-color-primary
              </li>
              <li className="gc-list__item">
                <div className="tst-colors-text gc-sample gc-sample--brand-text" />{" "}
                - Brand color text / $gb-color-text
              </li>
              <li className="gc-list__item">
                <div className="tst-colors-link gc-sample gc-sample--brand-link" />{" "}
                - Brand color link / $gb-color-link
              </li>
              <li className="gc-list__item">
                <div className="tst-colors-component gc-sample gc-sample--brand-component" />{" "}
                - Brand color component / $gb-color-component
              </li>
              <li className="gc-list__item">
                <div className="tst-colors-component gc-sample gc-sample--brand-component-dark" />{" "}
                - Brand color component dark / $gb-color-component-dark
              </li>
              <li className="gc-list__item">
                <div className="gc-sample gc-sample--brand-success" /> - Brand
                color success / $gb-color-success
              </li>
              <li className="gc-list__item">
                <div className="gc-sample gc-sample--brand-info" /> - Brand
                color info / $gb-color-info
              </li>
              <li className="gc-list__item">
                <div className="gc-sample gc-sample--brand-danger" /> - Brand
                color danger / $gb-color-danger
              </li>
            </ul>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Icons</header>
          <div className="gc-panel__content">
            <Icon type="circle-up" className="gc-icon--large" />{" "}
            <Icon type="circle-right" className="gc-icon--large" />{" "}
            <Icon type="circle-down" className="gc-icon--large" />{" "}
            <Icon type="circle-left" className="gc-icon--large" />{" "}
            <Icon type="fire" className="gc-icon--large" />{" "}
            <Icon type="man" className="gc-icon--large" />{" "}
            <Icon type="menu" className="gc-icon--large" />{" "}
            <Icon type="menu2" className="gc-icon--large" />{" "}
            <Icon type="menu3" className="gc-icon--large" />{" "}
            <Icon type="menu4" className="gc-icon--large" />{" "}
            <Icon type="thermometer-half" className="gc-icon--large" />{" "}
            <Icon type="radio-checked" className="gc-icon--large" />{" "}
            <Icon type="radio-checked2" className="gc-icon--large" />{" "}
            <Icon type="radio-unchecked" className="gc-icon--large" />
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Link</header>
          <div className="gc-panel__content">
            <Link link="http://some-url">Link Name</Link>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Header</header>
          <div className="gc-panel__content">
            <header className="gc-header">
              <Link className="gc-header__logo" link="/">
                Header
              </Link>
              <nav className="gc-header__navigation" />
            </header>
            <header className="gc-header gc-header--default">
              <Link className="gc-header__logo" link="/">
                Header + default
              </Link>
              <nav className="gc-header__navigation" />
            </header>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Footer</header>
          <div className="gc-panel__content">
            <footer className="gc-footer">Footer</footer>
            <footer className="gc-footer gc-footer--default">
              Footer + default
            </footer>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Navigation</header>
          <div className="gc-panel__content">
            <ul className="gc-navigation">
              <li className="gc-navigation__option">
                <Link className="gc-navigation__link" link="/">
                  Item 1
                </Link>
              </li>
              <li className="gc-navigation__option gc-navigation__option--active">
                <Link className="gc-navigation__link" link="/">
                  Item 2
                </Link>
              </li>
              <li className="gc-navigation__option">
                <Link className="gc-navigation__link" link="/">
                  Item 3
                </Link>
              </li>
              <li className="gc-navigation__option">
                <Link className="gc-navigation__link" link="/">
                  Item 4
                </Link>
              </li>
              <li className="gc-navigation__option">
                <Link className="gc-navigation__link" link="/">
                  Item 5
                </Link>
              </li>
            </ul>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Panel</header>
          <div className="gc-panel__content">
            <article className="gc-panel">
              <header className="gc-panel__title">Panel title</header>
              <div className="gc-panel__content">
                <p>Panel content paragraph 1</p>
                <p>Panel content paragraph 2</p>
              </div>
            </article>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Buttons</header>
          <div className="gc-panel__content">
            <p>
              <Button>Button</Button>{" "}
              <Button className="gc-btn--danger">Button + danger</Button>{" "}
              <Button className="gc-btn--primary">Button + primary</Button>{" "}
              <Button className="gc-btn--secondary">Button + secondary</Button>{" "}
              <Button className="gc-btn--tertiary">Button + tertiary</Button>
            </p>
            <p>
              <Button className="gc-btn--small">Button + small</Button>{" "}
              <Button className="gc-btn--small gc-btn--danger">
                Button + small + danger
              </Button>{" "}
              <Button className="gc-btn--small gc-btn--primary">
                Button + small + primary
              </Button>{" "}
              <Button className="gc-btn--small gc-btn--secondary">
                Button + small + secondary
              </Button>{" "}
              <Button className="gc-btn--small gc-btn--tertiary">
                Button + small + tertiary
              </Button>
            </p>
            <p>
              <Button className="gc-btn--full">Button + full</Button>
            </p>
            <p>
              <Button className="gc-btn--full gc-btn--danger">
                Button + full + danger
              </Button>
            </p>
            <p>
              <Button className="gc-btn--full gc-btn--primary">
                Button + full + primary
              </Button>
            </p>
            <p>
              <Button className="gc-btn--full gc-btn--secondary">
                Button + full + secondary
              </Button>
            </p>
            <p>
              <Button className="gc-btn--full gc-btn--tertiary">
                Button + full + tertiary
              </Button>
            </p>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Switches</header>
          <div className="gc-panel__content">
            <p>
              <label className="gc-switch">
                <input className="gc-switch__input" type="checkbox" />
                <span className="gc-switch__slider" />
              </label>{" "}
              <label className="gc-switch gc-switch--success">
                <input className="gc-switch__input" type="checkbox" />
                <span className="gc-switch__slider" />
              </label>{" "}
              <label className="gc-switch gc-switch--info">
                <input className="gc-switch__input" type="checkbox" />
                <span className="gc-switch__slider" />
              </label>{" "}
              <label className="gc-switch gc-switch--danger">
                <input className="gc-switch__input" type="checkbox" />
                <span className="gc-switch__slider" />
              </label>
            </p>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Tooltips</header>
          <div className="gc-panel__content">
            <p>
              <Tooltip type="danger">Tooltip danger message</Tooltip>
            </p>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Textarea</header>
          <div className="gc-panel__content">
            <textarea className="gc-textarea" />
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Input</header>
          <div className="gc-panel__content">
            <p>
              <div className="gc-input">
                <label className="gc-input__label">Input</label>
                <input className="gc-input__field" />
              </div>{" "}
              <div className="gc-input">
                <label className="gc-input__label">Inline</label>
                <input className="gc-input__field" />
              </div>
            </p>
            <p>
              <div className="gc-input gc-input--full">
                <label className="gc-input__label">Full Input</label>
                <input className="gc-input__field" />
              </div>
            </p>
            <p>
              <div className="gc-input gc-input--full">
                <label className="gc-input__label">Disabled Input</label>
                <input
                  className="gc-input__field"
                  disabled
                  value="Disabled input"
                />
              </div>
            </p>
            <p>
              <Input label="Success input" type="text" validation="success" />
            </p>
            <p>
              <Validation type="danger" message="Validation error message">
                <Input
                  label="Validated input with tooltip"
                  type="text"
                  validation="danger"
                />
              </Validation>
            </p>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">LED</header>
          <div className="gc-panel__content">
            <p>
              <div className="gc-led gc-led--red" />{" "}
              <div className="gc-led gc-led--red gc-led--blink" />
            </p>
            <p>
              <div className="gc-led gc-led--green" />{" "}
              <div className="gc-led gc-led--green gc-led--blink" />
            </p>
            <p>
              <div className="gc-led gc-led--blue" />{" "}
              <div className="gc-led gc-led--blue gc-led--blink" />
            </p>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Card</header>
          <div className="gc-panel__content">
            <div className="gc-flex gm-spacing-bottom-large">
              <div className="gc-flex__item gc-card gc-panel">
                <div className="gc-panel__title">Card</div>
                <div className="gc-panel__content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="gc-panel__footer">
                  <button className="gc-btn">Button</button>
                </div>
              </div>
            </div>
            <div className="gc-flex">
              <div className="gc-flex__item gc-card gc-card--default gc-panel gm-spacing-right-large">
                <div className="gc-panel__title">Card + default</div>
                <div className="gc-panel__content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="gc-panel__footer">
                  <button className="gc-btn gc-btn--primary">
                    Button + primary
                  </button>
                </div>
              </div>
              <div className="gc-flex__item gc-card gc-card--gradient gc-panel">
                <div className="gc-panel__title">Card + gradient</div>
                <div className="gc-panel__content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="gc-separator" />
                <div className="gc-panel__footer gc-panel__footer--separated">
                  <button className="gc-btn gc-btn--primary">
                    Button + primary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Alerts</header>
          <div className="gc-panel__content">
            <p>
              <div className="gc-alert">Alert</div>
            </p>
            <p>
              <div className="gc-alert gc-alert--success">Alert + success</div>
            </p>
            <p>
              <div className="gc-alert gc-alert--info">Alert + info</div>
            </p>
            <p>
              <div className="gc-alert gc-alert--danger">Alert + danger</div>
            </p>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Loader</header>
          <div className="gc-panel__content">
            <Loader />
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Scroller</header>
          <div className="gc-panel__content">
            <Scroller onScrollChange={_.noop} min={10} max={100} />
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Joystick</header>
          <div className="gc-panel__content">
            <Joystick onPositionChange={_.noop} isEnabled />
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Accordion</header>
          <div className="gc-panel__content">
            <Accordion title="Accordion title">
              <p>
                Some content <span>here</span>
              </p>
              <p>Multiple elements are allowed</p>
            </Accordion>
          </div>
        </article>
        <article className="gc-panel gc-panel--separator">
          <header className="gc-panel__title">Dialog</header>
          <div className="gc-panel__content">
            <Button
              className="gc-btn--primary"
              onClick={() => {
                this.handleShowDialog();
              }}
            >
              Open dialog
            </Button>

            {isDialogVisible && (
              <Dialog>
                <article className="gc-panel">
                  <header className="gc-panel__title">Dialog</header>
                  <div className="gc-panel__content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="gc-panel__footer">
                    <Button
                      onClick={() => {
                        this.handleHideDialog();
                      }}
                      className="gc-btn--primary"
                    >
                      Close
                    </Button>
                  </div>
                </article>
              </Dialog>
            )}
          </div>
        </article>
      </>
    );
  }
}

if (appContainer) {
  render(
    <section className="gc-page">
      <ExampleApp />
    </section>,
    appContainer
  );
}
