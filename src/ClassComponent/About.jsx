import React, { Component } from 'react'


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Shanto",
            profession: "Student"
        }
    }
    changeValue() {
        this.setState(
            {
                profession: "Web Developer"
            }
        )
    }
    changeMind = this.changeValue.bind(this, this.profession);
    render() {
        return (
            <div>
                <h2>{"Hello, my name is " + this.state.name + ","}
                    {"My Profession is " + this.state.profession}</h2>
                <button onClick={this.changeMind}>Change Value</button>
            </div>
        )
    }
}

export default About;