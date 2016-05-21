var data = {
  title: 1,
  description: "“Senior security engineer on his way to deliver comments to developers”",
  image_url: "http://67.media.tumblr.com/fa1ba165f49884d3339f156ca6ed5493/tumblr_o5ztxr9ZRr1ugyavxo1_1280.jpg",
};

$.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://classicprogrammerpaintings.com/random') + '&callback=?', function(data){
  var el = $( '<div></div>' );
  el.html(data.contents);
  image_url = $('section#posts .photo-wrapper img', el)[0].src;
  infos = _.map($('section#posts figcaption.caption p', el), "textContent");

  console.log({
    image_url: image_url,
    title: infos[0],
    description: _.tail(infos).join(', '),
  });
});

new Vue({
  el: '#app',
  data: {
    title: data.title,
    description: data.description,
    image_url: data.image_url,
  }
})
