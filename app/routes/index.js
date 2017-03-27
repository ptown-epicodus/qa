import Ember from 'ember';

var questions = [{
  title: 'Who are you?',
  author: 'John Doe',
  notes: 'lorem ipsum'
}];

export default Ember.Route.extend({
  model() {
    return questions;
    // return this.store.findAll('question');
  }
});
