import Vue from 'vue';
import Container from './components/container.vue';

export function createApp (el, options) {
  return new Vue({
    el: el,
    data () {
      return {
        counter: 0,
        modals: []
      }
    },
    methods: {
      createModal (modal) {
        modal.id = this.counter++;
        modal.active = true;

        this.modals.forEach(m => {
          m.active = false;
        });

        this.modals.unshift(modal);
      },
      closeActive() {
        this.modals.shift();

        if (this.modals.length) {
          this.modals[0].active = true;
        }
      }
    },
    render: function (h) {
      return h(Container, {
        props: {
          modals: this.modals,
          options: options
        },
        on: {
          closeActive: this.closeActive
        }
      });
    }
  });
}
