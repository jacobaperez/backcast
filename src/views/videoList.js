var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    this.videos = window.exampleVideoData;
    this.render();
  },

  render: function() {
    console.log("VideoListView Render Ran");
    this.$el.children().detach();
    // this.$el.html(this.template());
    // new VideoListEntryView();
    console.log(this.videos);
    for (var i = 0; i < this.videos.length; i++) {
      console.log(this.videos[i]);
          // this.$el.html(this.template(this.model.attributes));
      $(this.el).append(VideoListEntryView({model: this.videos[i]}));
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')


});
