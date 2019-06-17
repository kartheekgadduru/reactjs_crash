import React, { Component } from "react";
import ProjectList from "./projects";
import AddProject from "./addproject";

class HeadingPage extends Component {
  constructor() {
    super();
    this.handleAddProject = this.handleAddProject.bind(this);
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

  handleAddProject = project => {
      let addProjectList = this.state.projects;
      addProjectList.push(project);
      this.setState({project:addProjectList});
    
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
      </div>
    );
  }
}

export default HeadingPage;
