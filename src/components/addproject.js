import React, { Component } from "react";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static defaultProps = {
    catogories: ["Web Design", "Web Development", "Game Development"]
  };
  handleSubmit(e) {
    console.log(
      'button submited',
      this.refs.title.value,
      this.refs.category.value
    );
    if (this.refs.title) {
      this.setState(
        {
          newProject: {
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        },
        function() {         
          this.props.addProject(this.state.newProject)
        }
      );
    }
    e.preventDefault();
  }
  render() {
    const category = this.props.catogories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
    return (
      <div>
        <h3>Add project</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Title</label>
            <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label htmlFor="">Category</label>
            <br />
            <select ref="category">{category}</select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
