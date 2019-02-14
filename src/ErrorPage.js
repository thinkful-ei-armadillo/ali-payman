import React,{ Component } from 'react';

class ErrorPage extends Component {
    state = {
        error : null
    };
    updateStateWithChildError = (error) => {
        // Call From Child Components
        console.log(error)
        this.setState({error : error})
    }

render() {
    if (this.state.error) {
        return  <main className="errorPage">
                    <h1>This is a display for error message : {this.state.error}</h1>
                    <p>Refresh the page</p>
                </main>
    } else {
        return this.props.children;
    }
}

}

export default ErrorPage;