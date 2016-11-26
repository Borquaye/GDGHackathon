(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Hello Angular Front End GDG Hackathon!</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
