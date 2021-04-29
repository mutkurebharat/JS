function loadData(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(request.status);
        }
      }
    };

    request.open("GET", url);
    request.send();
  });
}

const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

btn.onclick = () => {
var data = loadData("http://jsonplaceholder.typicode.com/posts/1");
data.then(res => {
    console.log(msg);
    const result = JSON.parse(res);
    msg.innerHTML = result.title;
}, err => {
    console.log(err);
})
};
