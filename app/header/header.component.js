(function(app) {
  app.HeaderComponent =
    ng.core.Component({
      selector: 'header',
      templateUrl: 'app/header/header.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));

