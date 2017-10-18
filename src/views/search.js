var SearchView = Backbone.View.extend({

  el: '.search',

  initialize: function() {
    this.render();
  },

  render: function() {
    // pass the template html into this element
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
