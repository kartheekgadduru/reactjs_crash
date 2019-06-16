import React,{Component} from 'react';
import ProjectList from './projects';

class HeadingPage extends Component{

    render(){
        let projectList
           
      projectList=  this.props.projects.map(project =>{
            return(
                <ProjectList key={project.title} project={project}/>
                )
           
        });
        return (
            <div>
               {projectList}
            </div>
        );        
        
    }
}

export default HeadingPage;