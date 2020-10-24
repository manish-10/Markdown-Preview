import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Textbox from "./components/Textbox.js"
import "./App.css";

let marked = require("marked");
const axios = require('axios').default;

export class App extends Component {
  
  
  state = {
    text: "",
    results: "",
  };
  updateSourceText = (e) => {
    this.setState({ text: e.target.value},()=>{this.crst()});
  };


  //
  crst = () => {
    axios({
      method:'post',
      url:"http://localhost:5000/send",
      headers: {'content-type': 'application/json'},
      data:this.state
    })
        .then(result => {
          this.setState({results:result.data});
          // console.log(result.data)
        })
        .catch(error=> {
          console.log(error);
        })
  };
  handleClick = ()=>{
    
    
  }
  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true, gfm: true });
    const rsthtml = this.state.results;
    // const rst =
    return(
      
      <Router>

      

        <div className="container-fluid">
        <br/>
          <div class="btn-group float-right" role="group" aria-label="Basic example">
            <a class="btn btn-secondary" href="/md2html">Markdown Previewer</a>
          </div>
          <div class="btn-group float-right" role="group" aria-label="Basic example">
          <a class="btn btn disable" href="#" id="invisible"></a>
          </div>
          <div class="btn-group float-right" role="group" aria-label="Basic example">
          <a class="btn btn-secondary" href="/rst2html">RST Previewer</a>
          </div>
          
          <br/>
          {/* Markdown Router */}
          <Route
            path="/md2html"
            render={(props) => (
              <React.Fragment>
                <h2 className="text-center m-4" id="title">
                  Convert your text to Markdown
                  
                </h2>
                <div className="row ">
                  
                  <Textbox text={this.text}   updateSourceText={this.updateSourceText}/>
            
                  <div className="col-6" id="preview">
                    <h2 className="text-center p-2" id="text-area-label">
                      See the result:
                    </h2>
                    <div className="preview rounded">
                      <div dangerouslySetInnerHTML={{ __html: markdown }} />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
          <Route
            path="/rst2html"
            render={(props) => (
              <React.Fragment>
                <h2 className="text-center m-4" id="title">
                  Convert your text to ReStructured Text<br/>
                  
                </h2>
                <div className="row ">
                <Textbox text={this.text}   updateSourceText={this.updateSourceText}/>
                  
                  <div className="col-6" id="preview">
                    <h2 className="text-center p-2" id="text-area-label">
                      See the result:
                    </h2>
                    <div className="preview rounded">
                      <div dangerouslySetInnerHTML={{ __html: rsthtml }} />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;