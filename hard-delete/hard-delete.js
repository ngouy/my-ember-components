import Ember from 'ember';
const { observer, Component } = Ember;

export default Component.extend({
  modalOn: false,
  classNames: ['hard-delete'],
  classNameBindings: ['modalOn', 'disabled'],

  changeLeft: observer('modalOn', function() {
    if (this.get('modalOn')) {
      const left = this.get('last_left') || this.$().position().left;
      this.set('last_left', left);
      this.$().css({ left: left - 19 });
    } else {
      this.$().css({ left: this.get('last_left') });
    }
  }),

  actions: {
    click() {
      if (this.get('modalOn')) {
        this.get('action')();
      }
      this.toggleProperty('modalOn');
    },

    cancel() {
      this.set('modalOn', false);
    },
  }
});
