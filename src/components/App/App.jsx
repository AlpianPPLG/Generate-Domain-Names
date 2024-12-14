import React from "react";
import Header from "../Header/Header";
import ResultContainer from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";
import "./App.css";
const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  state = {
    headerText: "Generate Domain Names",
    headerExpanded: true,
    suggestedNames: [],
    favorites: [],
    minLength: 0,
    maxLength: 100,
    domainExtension: "",
    currentPage: 1,
    namesPerPage: 5, // Mengatur jumlah nama per halaman
  };

  handleInputChange = (inputText) => {
    const keywords = inputText.split(",").map((keyword) => keyword.trim());
    this.setState({
      headerExpanded: !(keywords.length > 0 && keywords[0] !== ""),
      suggestedNames:
        keywords.length > 0 && keywords[0] !== ""
          ? name(keywords.join(" "))
          : [],
      currentPage: 1, // Reset halaman saat input berubah
    });
  };

  toggleFavorite = (name) => {
    this.setState((prevState) => {
      const isFavorite = prevState.favorites.includes(name);
      return {
        favorites: isFavorite
          ? prevState.favorites.filter((fav) => fav !== name)
          : [...prevState.favorites, name],
      };
    });
  };

  filterNames = (names) => {
    const { minLength, maxLength, domainExtension } = this.state;
    return names.filter((name) => {
      const lengthValid = name.length >= minLength && name.length <= maxLength;
      const extensionValid =
        domainExtension === "" || name.endsWith(domainExtension);
      return lengthValid && extensionValid;
    });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const filteredNames = this.filterNames(this.state.suggestedNames);
    const { currentPage, namesPerPage } = this.state;

    // Menghitung indeks untuk pagination
    const indexOfLastName = currentPage * namesPerPage;
    const indexOfFirstName = indexOfLastName - namesPerPage;
    const currentNames = filteredNames.slice(indexOfFirstName, indexOfLastName);

    // Hitung total halaman
    const totalPages = Math.ceil(filteredNames.length / namesPerPage);

    return (
      <div>
        <Header
          headTitle={this.state.headerText}
          headerExpanded={this.state.headerExpanded}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <AdvancedSearch
          minLength={this.state.minLength}
          maxLength={this.state.maxLength}
          domainExtension={this.state.domainExtension}
          onFilterChange={(min, max, ext) =>
            this.setState({
              minLength: min,
              maxLength: max,
              domainExtension: ext,
              currentPage: 1, // Reset halaman saat filter berubah
            })
          }
        />
        <ResultContainer
          suggestedNames={currentNames}
          favorites={this.state.favorites}
          toggleFavorite={this.toggleFavorite}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default App;
