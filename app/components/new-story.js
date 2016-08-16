import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow(){
      this.set('addNewStory', true);
    },
    save1(){
      var params= {
        description: this.get('description'),
        image: this.get('image'),
        writer: this.get('writer'),    
      };
      this.set('addNewStory', false);
      this.sendAction('save2', params);
    }
  }
});
