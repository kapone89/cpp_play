var data = {
  title: 1,
  description: "“Senior security engineer on his way to deliver comments to developers”",
  image_url: "http://67.media.tumblr.com/fa1ba165f49884d3339f156ca6ed5493/tumblr_o5ztxr9ZRr1ugyavxo1_1280.jpg",
}

// setInterval(function () {
//   data.title += 1;
//   console.log(data.title);
// }, 1000);

new Vue({
  el: '#app',
  data: {
    title: data.title,
    description: data.description,
    image_url: data.image_url,
  }
})
