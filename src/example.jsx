// @flow
import _ from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import { Loader, Scroller } from './index';

const appContainer = document.querySelector('.js-example');

if (appContainer) {
  render(
    <div>
      <article className="c-panel">
        <header className="c-panel__title">
            Loader
        </header>
        <div className="c-panel__content">
          <Loader />
        </div>
      </article>
      <article className="c-panel">
        <header className="c-panel__title">
          Scroller
        </header>
        <div className="c-panel__content">
          <Scroller onScrollChange={_.noop} min={10} max={100} />
        </div>
      </article>
    </div>,
    appContainer
  );
}
