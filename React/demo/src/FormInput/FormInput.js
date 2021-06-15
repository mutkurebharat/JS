import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "Default Name",
      country: "India",
      comment: "Give your valuable comments here",
    };
  }

  handleNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  };

  handleCountryChange = (event) => {
    this.setState({
      country: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("Name = ", this.state.name)
    console.log("Country = ", this.state.country);
    console.log("Comment = ", this.state.comment);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>

        <div>
          <label>Select Country</label>
          <select
            value={this.state.country}
            onChange={this.handleCountryChange}
          >
            <option value="IND">India</option>
            <option value="US">America</option>
            <option value="UK">UK</option>
            <option value="AUS">Australia</option>
            <option value="SHR">Shrilanka</option>
          </select>
        </div>

        <div>
          <label>Comment</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
