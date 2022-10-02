import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { isErr: false }
    }

    componentDidCatch(err) {
        this.setState({ isErr: true })
    }

    render(){
        if(this.state.isErr){
            return <h1>UUUPPPSSS SOMETHING IS WRONG!!!!</h1>
        }

        return this.props.children;
    }
    

};

export default ErrorBoundary;