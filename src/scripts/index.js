const posts = [
  {
    title: "Post one",
    body: "This is post one",
  },
  {
    title: "Post two",
    body: "This is post two",
  },
];

const result = document.querySelector(".result");

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<p>${post.title}</p>`;
    });
    result.innerHTML = output;
  }, 1000);
}

getPosts();
