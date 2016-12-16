import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({

  classNames: ['clickable-caret'],
  classNameBindings: ['disabled'],

  tagName: 'div',

  click() {
    if (!this.get('disabled')) {
      this.set('clicked', true);
      this.get('action_on_click')();
    }
  },

  mouseLeave() {
    this.set('clicked', false);
  }

});