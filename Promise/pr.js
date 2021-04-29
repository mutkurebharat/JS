function loadData(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(this.status);
        }
      }
    };

    request.open("GET", url, true);
    request.send();
  });
}

const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

btn.onclick = () => {
  loadData("http://jsonplaceholder.typicode.com/posts/1").then((response) => {
    // console.log(response);
    // alert("sdkj");
    const result = JSON.parse(response);
    console.log(result);
  });
};
