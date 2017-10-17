var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.SearchView = new SearchView();
    this.VideoListView = new VideoListView();
    this.VideoPlayerView = new VideoPlayerView();
    this.VideoListEntryView = new VideoListEntryView();

  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
