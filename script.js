$.get('https://dwolverton.github.io/fe-demo/data/blog-posts.json', (data) => {
  console.log(data.title);
  console.log(data.language);
  console.log(data.posts);
  console.log(data.posts[0]);
  data.posts.forEach(function(entry){
    console.log(entry.title);
  })
});
