// @flow
import _ from "lodash";
import React from "react";
import { render } from "react-dom";
import { Icon, Link, Loader, Scroller, Joystick, Accordion } from "./index";

const appContainer = document.querySelector(".js-example");

if (appContainer) {
  render(
    <section className="c-page">
      <article className="tst-colors c-panel c-panel--separator">
        <header className="c-panel__title">Colors</header>
        <div className="c-panel__content">
          <ul className="c-list">
            <li className="c-list__item">
              <div className="tst-colors-primary c-sample c-sample--brand-primary" />{" "}
              - Brand color primary / $brand-color-primary
            </li>
            <li className="c-list__item">
              <div className="tst-colors-text c-sample c-sample--brand-text" />{" "}
              - Brand color text / $brand-color-text
            </li>
            <li className="c-list__item">
              <div className="tst-colors-link c-sample c-sample--brand-link" />{" "}
              - Brand color link / $brand-color-link
            </li>
            <li className="c-list__item">
              <div className="tst-colors-component c-sample c-sample--brand-component" />{" "}
              - Brand color component / $brand-color-component
            </li>
            <li className="c-list__item">
              <div className="tst-colors-component c-sample c-sample--brand-component-dark" />{" "}
              - Brand color component dark / $brand-color-component-dark
            </li>
            <li className="c-list__item">
              <div className="c-sample c-sample--brand-success" /> - Brand
              color success / $brand-color-success
            </li>
            <li className="c-list__item">
              <div className="c-sample c-sample--brand-info" /> - Brand color info /
              $brand-color-info
            </li>
            <li className="c-list__item">
              <div className="c-sample c-sample--brand-danger" /> - Brand color danger
              / $brand-color-danger
            </li>
          </ul>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Icons</header>
        <div className="c-panel__content">
          <Icon type="circle-up" className="c-icon--large" />{" "}
          <Icon type="circle-right" className="c-icon--large" />{" "}
          <Icon type="circle-down" className="c-icon--large" />{" "}
          <Icon type="circle-left" className="c-icon--large" />{" "}
          <Icon type="fire" className="c-icon--large" />{" "}
          <Icon type="man" className="c-icon--large" />{" "}
          <Icon type="menu" className="c-icon--large" />{" "}
          <Icon type="menu2" className="c-icon--large" />{" "}
          <Icon type="menu3" className="c-icon--large" />{" "}
          <Icon type="menu4" className="c-icon--large" />{" "}
          <Icon type="thermometer-half" className="c-icon--large" />{" "}
          <Icon type="radio-checked" className="c-icon--large" />{" "}
          <Icon type="radio-checked2" className="c-icon--large" />{" "}
          <Icon type="radio-unchecked" className="c-icon--large" />
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Link</header>
        <div className="c-panel__content">
          <Link link="http://some-url">Link Name</Link>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Header</header>
        <div className="c-panel__content">
          <header className="c-header">
            <Link className="c-header__logo" link="/">
              Header
            </Link>
            <nav className="c-header__navigation" />
          </header>
          <header className="c-header c-header--default">
            <Link className="c-header__logo" link="/">
              Header + default
            </Link>
            <nav className="c-header__navigation" />
          </header>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Footer</header>
        <div className="c-panel__content">
          <footer className="c-footer">Footer</footer>
          <footer className="c-footer c-footer--default">
            Footer + default
          </footer>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Navigation</header>
        <div className="c-panel__content">
          <ul className="c-navigation">
            <li className="c-navigation__option">
              <Link className="c-navigation__link" link="/">
                Item 1
              </Link>
            </li>
            <li className="c-navigation__option">
              <Link className="c-navigation__link" link="/">
                Item 2
              </Link>
            </li>
            <li className="c-navigation__option">
              <Link className="c-navigation__link" link="/">
                Item 3
              </Link>
            </li>
            <li className="c-navigation__option">
              <Link className="c-navigation__link" link="/">
                Item 4
              </Link>
            </li>
            <li className="c-navigation__option">
              <Link className="c-navigation__link" link="/">
                Item 5
              </Link>
            </li>
          </ul>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Panel</header>
        <div className="c-panel__content">
          <article className="c-panel">
            <header className="c-panel__title">Panel title</header>
            <div className="c-panel__content">
              <p>Panel content paragraph 1</p>
              <p>Panel content paragraph 2</p>
            </div>
          </article>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Buttons</header>
        <div className="c-panel__content">
          <p>
            <button className="c-btn">Button</button>{" "}
            <button className="c-btn c-btn--default">Button + default</button>{" "}
            <button className="c-btn c-btn--accept">Button + accept</button>{" "}
            <button className="c-btn c-btn--edit">Button + edit</button>{" "}
            <button className="c-btn c-btn--remove">Button + remove</button>
          </p>
          <p>
            <button className="c-btn c-btn--small">Button + small</button>{" "}
            <button className="c-btn c-btn--small c-btn--default">
              Button + small + default
            </button>{" "}
            <button className="c-btn c-btn--small c-btn--accept">
              Button + small + accept
            </button>{" "}
            <button className="c-btn c-btn--small c-btn--edit">
              Button + small + edit
            </button>{" "}
            <button className="c-btn c-btn--small c-btn--remove">
              Button + small + remove
            </button>
          </p>
          <p>
            <button className="c-btn c-btn--full">Button + full</button>
          </p>
          <p>
            <button className="c-btn c-btn--full c-btn--default">
              Button + full + default
            </button>
          </p>
          <p>
            <button className="c-btn c-btn--full c-btn--accept">
              Button + full + accept
            </button>
          </p>
          <p>
            <button className="c-btn c-btn--full c-btn--edit">
              Button + full + edit
            </button>
          </p>
          <p>
            <button className="c-btn c-btn--full c-btn--remove">
              Button + full + remove
            </button>
          </p>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Switches</header>
        <div className="c-panel__content">
          <p>
            <label className="c-switch">
              <input className="c-switch__input" type="checkbox" />
              <span className="c-switch__slider" />
            </label>{" "}
            <label className="c-switch c-switch--success">
              <input className="c-switch__input" type="checkbox" />
              <span className="c-switch__slider" />
            </label>{" "}
            <label className="c-switch c-switch--info">
              <input className="c-switch__input" type="checkbox" />
              <span className="c-switch__slider" />
            </label>{" "}
            <label className="c-switch c-switch--danger">
              <input className="c-switch__input" type="checkbox" />
              <span className="c-switch__slider" />
            </label>
          </p>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Textarea</header>
        <div className="c-panel__content">
          <textarea className="c-textarea" />
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Input</header>
        <div className="c-panel__content">
          <p>
            <div className="c-input">
              <label className="c-input__label">Input</label>
              <input className="c-input__field" />
            </div>{" "}
            <div className="c-input">
              <label className="c-input__label">Inline</label>
              <input className="c-input__field" />
            </div>
          </p>
          <p>
            <div className="c-input c-input--full">
              <label className="c-input__label">Full Input</label>
              <input className="c-input__field" />
            </div>
          </p>
          <p>
            <div className="c-input c-input--full">
              <label className="c-input__label">Disabled Input</label>
              <input
                className="c-input__field"
                disabled
                value="Disabled input"
              />
            </div>
          </p>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">LED</header>
        <div className="c-panel__content">
          <p>
            <div className="c-led c-led--red" />{" "}
            <div className="c-led c-led--red c-led--blink" />
          </p>
          <p>
            <div className="c-led c-led--green" />{" "}
            <div className="c-led c-led--green c-led--blink" />
          </p>
          <p>
            <div className="c-led c-led--blue" />{" "}
            <div className="c-led c-led--blue c-led--blink" />
          </p>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Card</header>
        <div className="c-panel__content">
          <div className="c-cards">
            <div className="c-card">Card</div>
            <div className="c-card c-card--default">Card + default</div>
          </div>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Alerts</header>
        <div className="c-panel__content">
          <p>
            <div className="c-alert">Alert</div>
          </p>
          <p>
            <div className="c-alert c-alert--danger">Alert + danger</div>
          </p>
          <p>
            <div className="c-alert c-alert--success">Alert + success</div>
          </p>
          <p>
            <div className="c-alert c-alert--info">Alert + info</div>
          </p>
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Loader</header>
        <div className="c-panel__content">
          <Loader />
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Scroller</header>
        <div className="c-panel__content">
          <Scroller onScrollChange={_.noop} min={10} max={100} />
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Joystick</header>
        <div className="c-panel__content">
          <Joystick onPositionChange={_.noop} isEnabled />
        </div>
      </article>
      <article className="c-panel c-panel--separator">
        <header className="c-panel__title">Accordion</header>
        <div className="c-panel__content">
          <Accordion title="Accordion title">
            <p>
              Some content <span>here</span>
            </p>
            <p>Multiple elements are allowed</p>
          </Accordion>
        </div>
      </article>
    </section>,
    appContainer
  );
}
