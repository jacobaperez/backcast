var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // Extract example video data
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    // Instantiate video list view, with the collection of videos
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    // Instantiate the video player, with the collection of videos
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();

    // Adding the search bar
    new SearchView({
      el: this.$('.search')
    }).render();


    return this;
  },

  template: templateURL('src/templates/app.html')

});
