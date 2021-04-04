import {createApp} from './create-app';

window.Modals = {
  init (el) {
    if (this.initialized) {
      return;
    }

    this.container = createApp(el);
    this.initialized = true;

    return this;
  },

  open(modal) {
    this.container.createModal(modal);
  },

  closeActive() {
    this.container.closeActive();
  }
};