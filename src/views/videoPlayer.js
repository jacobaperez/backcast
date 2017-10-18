var VideoPlayerView = Backbone.View.extend({

  // el: '.player',z

  initialize: function() {
    // this.render();
    this.render();
    // this.listenTo(this.collection, 'select', this.selectVideo)
    // this.selectVideo(this.collection.at(0));
  },

  chooseVideo: function(selectedVideo) {
      this.model = selectedVideo;
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
