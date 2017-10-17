var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    // this.listenTo(this.collection, 'sync', this.render);
      this.videos = window.exampleVideoData;
      this.render();
  },

  render: function() {
    console.log("VideoListView Render Ran");
    this.$el.children().detach();
    this.$el.html(this.template());

    // this.$el.children().append(
    //   this.collection.map(function(video) {
    //     return new VideoListEntryView( {model: video} ).render().el;
    //   })
    // );
    // return this;

    // this.$el.html(this.template());
    new VideoListEntryView();
    console.log(this.videos);
    for (var i = 0; i < this.videos.length; i++) {
      console.log(this.videos[i]);
          this.$el.html(this.template(this.model.attributes));
      $(this.el).append(new VideoListEntryView({model: this.videos[i]}).render());
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')


});
