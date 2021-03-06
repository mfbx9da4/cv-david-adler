// Generated by CoffeeScript 1.4.0
(function() {

  window.Gravatar = (function() {

    function Gravatar(src) {
      var css_params;
      this.src = src;
      this.el = $('<img class="" id="gravatar" src="' + this.src + '" />');
      this.el.position().top;
      css_params = {
        position: 'absolute',
        cursor: 'pointer',
        top: '4em',
        left: '-4em',
        opacity: 0,
        width: 0,
        height: 0
      };
      this.el.css(css_params);
      this.el.hover(function(e) {
        return $('#my-name').addClass('hover');
      }, function(e) {
        return $('#my-name').removeClass('hover');
      });
      this.el.click(function(e) {
        e.preventDefault();
        return location.reload();
      });
    }

    Gravatar.prototype.show = function(onComplete) {
      var dim;
      dim = 90;
      return this.el.animate({
        top: this.el.position().top - dim / 2,
        left: this.el.position().left - dim / 2,
        width: dim,
        opacity: 1,
        height: dim
      }, {
        duration: 200,
        complete: function() {
          return onComplete();
        }
      });
    };

    return Gravatar;

  })();

}).call(this);
