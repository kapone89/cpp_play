var data = {
  title: 1,
  description: "",
  image_url: "",
}

// setInterval(function () {
//   data.title += 1;
//   console.log(data.title);
// }, 1000);

new Vue({
  el: '#app',
  data: {
    title: data.title
  }
})
