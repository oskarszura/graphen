// @flow
import _ from "lodash";
import React from "react";
import { render } from "react-dom";
import { Icon, Link, Loader, Scroller, Joystick, Accordion } from "./index";

const appContainer = document.querySelector(".js-example");

if (appContainer) {
  render(
    <section className="gc-page">
      <article className="tst-colors gc-panel gc-panel--separator">
        <header className="gc-panel__title">Colors</header>
        <div className="gc-panel__content">
          <ul className="gc-list">
            <li className="gc-list__item">
              <div className="tst-colors-primary gc-sample gc-sample--brand-primary" />{" "}
              - Brand color primary / $gb-brand-color-primary
            </li>
            <li className="gc-list__item">
              <div className="tst-colors-text gc-sample gc-sample--brand-text" />{" "}
              - Brand color text / $brand-color-text
            </li>
            <li className="gc-list__item">
              <div className="tst-colors-link gc-sample gc-sample--brand-link" />{" "}
              - Brand color link / $brand-color-link
            </li>
            <li className="gc-list__item">
              <div className="tst-colors-component gc-sample gc-sample--brand-component" />{" "}
              - Brand color component / $gb-brand-color-component
            </li>
            <li className="gc-list__item">
              <div className="tst-colors-component gc-sample gc-sample--brand-component-dark" />{" "}
              - Brand color component dark / $gb-brand-color-component-dark
            </li>
            <li className="gc-list__item">
              <div className="gc-sample gc-sample--brand-success" /> - Brand color
              success / $gb-brand-color-success
            </li>
            <li className="gc-list__item">
              <div className="gc-sample gc-sample--brand-info" /> - Brand color
              info / $gb-brand-color-info
            </li>
            <li className="gc-list__item">
              <div className="gc-sample gc-sample--brand-danger" /> - Brand color
              danger / $gb-brand-color-danger
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
            <li className="gc-navigation__option">
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
            <button className="gc-btn">Button</button>{" "}
            <button className="gc-btn gc-btn--default">Button + default</button>{" "}
            <button className="gc-btn gc-btn--accept">Button + accept</button>{" "}
            <button className="gc-btn gc-btn--edit">Button + edit</button>{" "}
            <button className="gc-btn gc-btn--remove">Button + remove</button>
          </p>
          <p>
            <button className="gc-btn gc-btn--small">Button + small</button>{" "}
            <button className="gc-btn gc-btn--small gc-btn--default">
              Button + small + default
            </button>{" "}
            <button className="gc-btn gc-btn--small gc-btn--accept">
              Button + small + accept
            </button>{" "}
            <button className="gc-btn gc-btn--small gc-btn--edit">
              Button + small + edit
            </button>{" "}
            <button className="gc-btn gc-btn--small gc-btn--remove">
              Button + small + remove
            </button>
          </p>
          <p>
            <button className="gc-btn gc-btn--full">Button + full</button>
          </p>
          <p>
            <button className="gc-btn gc-btn--full gc-btn--default">
              Button + full + default
            </button>
          </p>
          <p>
            <button className="gc-btn gc-btn--full gc-btn--accept">
              Button + full + accept
            </button>
          </p>
          <p>
            <button className="gc-btn gc-btn--full gc-btn--edit">
              Button + full + edit
            </button>
          </p>
          <p>
            <button className="gc-btn gc-btn--full gc-btn--remove">
              Button + full + remove
            </button>
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
          <div className="ggc-cards">
            <div className="gc-card">Card</div>
            <div className="gc-card gc-card--default">Card + default</div>
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
            <div className="gc-alert gc-alert--danger">Alert + danger</div>
          </p>
          <p>
            <div className="gc-alert gc-alert--success">Alert + success</div>
          </p>
          <p>
            <div className="gc-alert gc-alert--info">Alert + info</div>
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
    </section>,
    appContainer
  );
}
