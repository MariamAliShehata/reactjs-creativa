import React ,{Component} from "react";

class ClassProps extends Component{
    render(props){
        return(
            <div>
                <h2>This is Class Props:</h2>
                {this.props.children}
                <h3>{this.props.x}</h3>
                <h3>{this.props.y}</h3>

                
            </div>
        )

        
    }
} 
export default ClassProps;