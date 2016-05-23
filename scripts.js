new Vue({
  el: '#app',
  data: {
    title: "“Last sprint before the deadline”",
    description: "Józef Chełmoński, 1881, Oil on Canvas",
    image_url: "http://65.media.tumblr.com/868169650b9c0520b3ccf88a96b9e9de/tumblr_o632v3uxOW1ugyavxo1_1280.jpg",
  },
  methods: {
    reloadPainting: function () {
      that = this;
      $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://classicprogrammerpaintings.com/random') + '&callback=?', function(data){
        var el = $( '<div></div>' );
        el.html(data.contents);
        var id = $('section#posts article', el).attr("data-post-id")
        if (that.isValid(id)) {
          var infos = _.map($('section#posts figcaption.caption p', el), "textContent");
          that.image_url = $('section#posts .photo-wrapper img', el)[0].src;
          that.title = infos[0];
          that.description = _.tail(infos).join(', ');
        } else {
          that.reloadPainting();
        }
      });
    },
    isValid: function (id) {
      var blacklist = ["144602205627", "144453453859", "144249553193", "143537166294", "142817850864", "142602959384", "142321815809"];
      return blacklist.indexOf(id) < 0;
    }
  },
  ready: function () {
    that = this;
    setInterval(function () {
      that.reloadPainting();
    }, 300000);
  }
});
