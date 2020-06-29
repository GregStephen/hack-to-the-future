import React, { Component } from "react";
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure,
  Panel,
} from "react-instantsearch-dom";
import "./App.css";
import Algolia from '../Helpers/Data/Algolia';

import Stats from "../Components/Stats";
import Content from "../Components/Content";
import Facet from "../Components/Facet";

class App extends Component {
  render() {
    return (
      <InstantSearch
        indexName="Rick_And_Morty_Characters"
        searchClient={Algolia.client}
      >
        <h1 className='title'>SHOW ME WHAT YOU GOT</h1>
        <main className="search-container">
          <Configure
            hitsPerPage={5}
          />
          <div className="right-panel">
            <div id="hits">
              <Content />
            </div>
            <div id="searchbox">
              <SearchBox
                translations={{ placeholder: "Search for characters" }}
              />
            </div>
            <div id="stats">
              <Stats />
            </div>
            <div id="pagination">
              <Pagination />
            </div>
          </div>
          <div className="left-panel">
            <div id="status">
              <Panel header="Status">
                <Facet
                  attribute="status"
                />
              </Panel>
            </div>
            <div id="species">
              <Panel header="Species">
                <Facet
                  attribute="species"
                />
              </Panel>
            </div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}


export default App;
