import React from "react";
import Header from "../Header/Header";
import ResultContainer from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

// Class based component
class App extends React.Component {
  state = {
    headerText: "Generate Domain Names",
    headerExpanded: true,
    suggestedNames: [],
  };

  // Fungsi menangani perubahan input dan menghasilkan nama domain
  handleInputChange = (inputText) => {
    const keywords = inputText.split(",").map((keyword) => keyword.trim()); // Pisahkan berdasarkan koma dan hilangkan spasi ekstra
    this.setState({
      headerExpanded: !(keywords.length > 0 && keywords[0] !== ""),
      suggestedNames:
        keywords.length > 0 && keywords[0] !== ""
          ? name(keywords.join(" "))
          : [],
    });
  };

  render() {
    return (
      <div>
        <Header
          headTitle={this.state.headerText}
          headerExpanded={this.state.headerExpanded}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
