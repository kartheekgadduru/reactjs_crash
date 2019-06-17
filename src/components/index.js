import React, { Component } from "react";
import ProjectList from "./projects";
import AddProject from "./addproject";
import HandleEvent from "./eventhandleing";

class HeadingPage extends Component {
  constructor() {
    super();
    this.state = {
      amount: null
    };
    
   
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          title: "Business Website",
          category: "Web design"
        },
        {
          title: "Social website",
          category: "Mobile Development"
        },
        {
          title: "Games Website",
          category: "Game Development"
        }
      ]
    });
  }
  handleIncrement = () => {
    this.setState({
      amount: this.state.amount + 1
    });
  };
  handleDecrement = () => {
    this.setState({
      amount: this.state.amount - 1
    });
  };
  handleAddProject = project => {
    let addProjectList = this.state.projects;
    addProjectList.push(project);
    this.setState({ project: addProjectList });
  };
  render() {
    let projectList;

    projectList = this.state.projects.map(project => {
      return <ProjectList key={project.title} project={project} />;
    });
    return (
      <div>
        <h1>Heading Page </h1>
        <AddProject
          addProject={this.handleAddProject}
          project={this.props.projects}
        />
        {projectList}
        <HandleEvent
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
          amount={this.state.amount}
        />
      </div>
    );
  }
}

export default HeadingPage;
