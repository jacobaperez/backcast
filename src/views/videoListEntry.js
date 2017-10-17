var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',

  initialize: function() {
    // $('.video-list-entry-title').on('click', this.handleClick);
    // this.render();
  },

  // handleClick: function () {
  //   this.model.select();
  // },
  //
  // render: function() {
  //   this.$el.html(this.template(this.model.attributes));
  //   return this;
  // },
  render: function() {
    this.$el.html(this.template(this.collection));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')




  // el: '.video-list-entry'
  //
  // initialize: function() {
  //   this.render();
  // },
  //
  // render: function() {
  //   this.$el.html(this.template(this.model.attributes));
  //   return this;
  // },
  //
  // template: templateURL('src/templates/videoListEntry.html')

});
