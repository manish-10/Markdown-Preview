import React, { Component } from 'react'

export class Textbox extends Component {
    render() {
        return (
            <div className="col-6 ">
                    <h2 className="text-center p-2" id="text-area-label">
                      Enter your text:
                    </h2>
                    <textarea
                      className="form-control"
                      id="editor"
                      value={this.props.text}
                      onChange={this.props.updateSourceText}
                      style={{backgroundColor:"#5e5e5e", color:"#f3ecec"}}
                    />
                  </div>
        )
    }
}

export default Textbox
