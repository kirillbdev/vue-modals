export default {
  props: [
    'modal'
  ],
  computed: {
    classes () {
      return [
        'modal',
        {
          'active': this.modal.active
        },
        ...this.modal.classes || []
      ]
    }
  }
}