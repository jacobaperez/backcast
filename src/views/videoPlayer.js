var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    // this.render();

    // event listener, when video is chosen, switch to selected video
    this.listenTo(this.collection, 'select', this.selectVideo)
    this.selectVideo(this.collection.at(0));
  },

  // when a specific video is selected, render that video
  selectVideo: function(selectedVideo) {
      this.model = selectedVideo;
      this.render();
  },

  render: function() {
    if (this.model) {
      // if a model exists, render annd display video. Otherwise display "please wait"
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    console.log('THIS: ' + this);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
