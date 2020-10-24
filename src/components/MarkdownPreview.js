import React, { Component } from 'react'

export class MarkdownPreview extends Component {
    render() {
        
        return (
            <div className="col-6" id="preview">
                    <h2 className="text-center p-2" id="text-area-label">
                      See the result:
                    </h2>
                    <div className="preview rounded">
                      <div dangerouslySetInnerHTML={{ __html: markdown }} />
                    </div>
                  </div>
        )
    }
}

export default MarkdownPreview
