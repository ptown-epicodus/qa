import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author') ? this.get('author') : "",
        notes: this.get('notes') ? this.get('notes') : ""
      };
      this.sendAction('saveQuestion', params);
    },

    questionFormShow() {
      this.set('addNewQuestion', true);
    }
  }
});
