import {createApp} from './create-app';

const VueModals = {
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


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.VueModals = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return VueModals;
}));