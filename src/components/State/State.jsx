import React,{Component} from "react";

class State extends Component{
    constructor(props) {
        super();
        this.state = {
            isloggedin: false,
            subscriber: "Guest"
        }
    }
    loggedin = () => {
        this.setState({
            isloggedin: true,
            subscriber: "You now have a subscription"
        });
    }
    render(){
        return(
            <div>
                <h1>{this.state.subscriber}</h1>
                <h1>{this.state.isloggedin ? "Logged-in" : " "}</h1>
                <button onClick={this.loggedin}>Login</button>
            </div>
    
        )
    }
}
        
export default State;