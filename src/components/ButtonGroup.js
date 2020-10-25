import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
         <div> 
            <div class="btn-group float-right" role="group" aria-label="Basic example">
                <a class="btn btn-secondary" href="/md2html">Markdown Previewer</a>
            </div>
            <div class="btn-group float-right" role="group" aria-label="Basic example">
            <a class="btn btn disable" href="#" id="invisible"></a>
            </div>
            <div class="btn-group float-right" role="group" aria-label="Basic example">
            <a class="btn btn-secondary" href="/rst2html">RST Previewer</a>
            </div>
          </div>  
        )
    }
}

export default Button
