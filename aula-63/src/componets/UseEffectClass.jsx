import React from "react";

export default class UseStateClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount(){
        document.title = 'Quantidade de clicks: ${this.state.clicks}'
    }

    componentDidUpdate(){
        document.title = 'Quantidade de clicks: ${this.state.clicks}'
    }

    render () {
        return(
            <div>
                <h3>UseEffect em componente de classe</h3>
                <p>Quantidade de clicks: {this.state.clicks}</p>
                <button
                    onClick={
                        () => this.setState({clicks: this.state.clicks + 1})
                    }
                >
                    clique aqui
                </button>
            </div>
        )
    }
}