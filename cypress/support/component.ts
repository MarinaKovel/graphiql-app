/* eslint-disable @typescript-eslint/no-namespace */
import './commands';
import { mount } from 'cypress/react18';
import '@cypress/code-coverage/support';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);
