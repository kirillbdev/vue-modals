<template>
  <div :class="classes">
    <transition-group name="list" tag="div">
      <template v-for="modal in modals">
        <simple-modal
            v-if="'simple' === modal.type"
            :key="modal.id"
            :modal="modal"></simple-modal>
        <component-modal
            v-if="'component' === modal.type"
            :key="modal.id"
            :modal="modal"></component-modal>
      </template>
    </transition-group>
  </div>
</template>

<script>
  import SimpleModal from './modals/simple-modal.vue';
  import ComponentModal from './modals/component-modal.vue';

  export default {
    components: {
      SimpleModal,
      ComponentModal
    },
    props: [
      'modals',
      'options'
    ],
    computed: {
      classes: function () {
        return [
          this.options.containerClass || 'modal-container',
          {
            'active': this.modals.length
          }
        ];
      }
    },
    mounted: function () {
      document.body.addEventListener('click', event => {
        if ( ! event.target.closest('.modal')) {
          this.$emit('closeActive');
        }
      });
    }
  }
</script>