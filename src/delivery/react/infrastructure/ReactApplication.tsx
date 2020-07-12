import React from 'react';
import ReactDOM from 'react-dom';

import { ReactWebApp } from '..';
import { Application } from '../../../contracts/infrastructure/Application';
import { Router } from '../../../contracts/infrastructure/Router';

export class ReactApplication implements Application {
  constructor(private router: Router) {}

  run() {
    ReactDOM.render(
      <React.StrictMode>
        <ReactWebApp router={this.router} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
}