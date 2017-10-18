var VideoListView = Backbone.View.extend({

  render: function() {
    console.log("VideoListView Render Ran");

    // detatch previous placeholders and insert our video list template
    this.$el.children().detach();
    this.$el.html(this.template());

    // For each model in the collection, render each video entry
    this.collection.each(this.renderVideo, this);

    return this;
  },

  renderVideo: function(video) {
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video
      }).render().el
    )
  },
    // this.$el.children().append(
    //   this.collection.map(function(video) {
    //     return new VideoListEntryView( {model: video} ).render().el;
    //   })
    // );
    // return this;

    // this.$el.html(this.template());
    // new VideoListEntryView();
    // console.log(this.videos);

    //
    //
    // for (var i = 0; i < this.videos.length; i++) {
    //   console.log(this.videos[i]);
    //       this.$el.html(this.template(this.model.attributes));

  // },

  template: templateURL('src/templates/videoList.html')


});
