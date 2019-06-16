import React,{Component} from 'react';

class ProjectList extends Component{

    render(){
        console.log(this.props);
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