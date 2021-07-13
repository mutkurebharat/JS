import { Component } from "react";
import axios from 'axios';

class MethodPostApi extends Component {
  constructor() {
    super();

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://jsonplaceholder.typicode.com/posts", this.state)
    .then(
        res => {
            console(res);
        }
    )
    .catch(
        err => {
            console.log(err);
        }
    )
  }
  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            User Id:{" "}
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            Title:{" "}
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            Body:{" "}
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default MethodPostApi;