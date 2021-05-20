import {createApp} from './create-app';

const VueModals = {
  init (el, options) {
    if (this.initialized) {
      return;
    }

    this.container = createApp(el, options || {});
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

export default VueModals;