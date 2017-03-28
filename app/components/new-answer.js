import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
