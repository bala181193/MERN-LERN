import React from 'react'

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "balamurugan"
        }
    }

    handleChange = (e) => {
        this.setState({ firstName: e.target.value })
    }
    render() {
        return (
            <>
                <input name='firstName' value={this.state.firstName} onChange={this.handleChange} />
                <button>onClick</button>
            </>
        )
    }
}

export default LifeCycle
