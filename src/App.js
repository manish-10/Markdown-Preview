import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MarkdownPreview from "./components/MarkdownPreview.js";
import NavBar from "./components/NavBar.js";

let marked = require("marked");
const axios = require("axios").default;

export class App extends Component {
  state = {
    text: "",
    results: "",
    srcformat: "",
  };
  updateSourceText = (e) => {
    this.setState({ text: e.target.value }, () => {
      this.crst();
    });
  };

  //
  crst = () => {
    axios({
      method: "post",
      url: "http://localhost:3000/api/send",
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({ results: result.data });
        // console.log(result.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true, gfm: true });
    const rsthtml = this.state.results;
    // const rst =
    return (
      <Router>
        {/* <ButtonGroup /> */}

        <NavBar />
        <div className="container-fluid" id="invisible">
          <br />

          <br />

          {/* Markdown Router */}
          
          <Route
            path="/md2html"
            render={(props) =>
              MarkdownPreview({
                conversionHeading: "Convert Text to Markdown",
                parsedText: markdown,
                text: text,
                updateSourceText: this.updateSourceText,
              })
            }
          />

          {/* RST Router */}
          <Route
            path="/rst2html"
            render={(props) =>
              MarkdownPreview({
                conversionHeading:"Convert Text to ReStructutred Text", 
                parsedText: rsthtml,
                text: text,
                updateSourceText: this.updateSourceText,
              })
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
