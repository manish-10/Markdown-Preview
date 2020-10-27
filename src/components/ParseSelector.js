import React from 'react'

function ParseSelector({frmt}) {
  return (
    <select value={this.state.frmt} onChange={(e)=>{this.setState({frmt : e.target.value})}}>
            <option value="markdown">Markdown</option>
            <option value="rst">RST</option>
            <option value="html">HTML</option>
           
          </select>
          
  )
}

export default ParseSelector

