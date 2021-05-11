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

const container = document.querySelector("#list");
const btn = document.querySelector("#btnGet");
btn.onclick = () => {
  var data = loadData("http://jsonplaceholder.typicode.com/posts");

  data.then(
    (res) => {
    //   var parseData = JSON.parse(res);

    console.log(strData);

      var table =
        "<table><tr><th>User Id</th><th>Id</th><th>Title</th><th>Body</th></tr>";

    //   strData.forEach((obj) => {
    //     table = `${table}<tr><td>${obj.userId}</td><td>${obj.id}</td><td>${obj.title}</td><td>${obj.body}</td></tr>`;
    //   });

      parseData.forEach(function(obj){
        table = `${table}<tr><td>${obj.userId}</td><td>${obj.id}</td><td>${obj.title}</td><td>${obj.body}</td></tr>`;
      });

      table = table + "</table>";

      container.innerHTML = table;
    },
    (err) => {
      console.log(err);
    }
  );
};
