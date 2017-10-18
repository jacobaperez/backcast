var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
    // this.SearchView = new SearchView();
    // this.VideoListView = new VideoListView();
    // this.VideoPlayerView = new VideoPlayerView();
    // this.VideoListEntryView = new VideoListEntryView();

  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();

    new SearchView({
      el: this.$('.search')
    }).render();


    return this;
  },

  template: templateURL('src/templates/app.html')

});
