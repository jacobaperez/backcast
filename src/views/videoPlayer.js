var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    // this.render();
    this.listenTo(this.collection, 'select', this.chooseVideo)
  },

  chooseVideo: function(selection) {
      this.model = selection;
      this.render();
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    console.log('THIS: ' + this);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
