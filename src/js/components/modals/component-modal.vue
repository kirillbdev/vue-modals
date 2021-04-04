<script>
  import ModalBase from './../../mixins/modal';

  export default {
    name: 'component-modal',
    mixins: [
        ModalBase
    ],
    render: function (h) {
      return h('div', {
          class: this.classes
        },
        [
          h(this.modal.component, {
            props: this.modal.props || {},
            on: this.modal.events || {}
          })
        ]
      );
    }
  }
</script>