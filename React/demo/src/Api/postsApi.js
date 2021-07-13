import { Component } from "react";
import axios from 'axios';

class PostsApi extends Component {

    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/pos")
        .then(
            res => {
                console.log(res);
                this.setState({
                    posts: res.data
                })
            }
        )
        .catch()
    }

    render() {
        return (
          <>
            <h1>List Of Posts</h1>
            <ul>
              {this.state.posts.length
                ? this.state.posts.map((post, index) => (
                    <li key={post.id}>{post.title}</li>
                  ))
                : <div>Some Error Are There</div>}
            </ul>
          </>
        );
    }
}

export default PostsApi;