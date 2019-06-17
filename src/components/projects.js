import React,{Component} from 'react';

class ProjectList extends Component{

    render(){
      console.log(this.props.project)  ;
       const {title, category } = this.props.project;     
        return (
            <li className="projects">
               <strong>{title}</strong>:{category}               
            </li>
        );        
        
    }
}

export default ProjectList;