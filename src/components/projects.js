import React,{Component} from 'react';

class ProjectList extends Component{

    render(){
        
       const {title, category } = this.props.project;     
        return (
            <ul>
                <li>{title}</li>
                <li>{category}</li>
                
            </ul>
        );        
        
    }
}

export default ProjectList;