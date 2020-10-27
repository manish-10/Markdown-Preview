import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Form, FormControl,Button} from 'react-bootstrap'
export class ButtonGroup extends Component {
    render() {
        return (
         <div> 
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    
  </Navbar>
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

export default ButtonGroup
