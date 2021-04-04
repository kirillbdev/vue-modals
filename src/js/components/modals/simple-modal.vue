<template>
  <div :class="classes" v-html="modal.html"></div>
</template>

<script>
  import ModalBase from './../../mixins/modal';

  export default {
    name: 'simple-modal',
    mixins: [
        ModalBase
    ]
  }
</script>