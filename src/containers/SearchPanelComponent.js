import React, { Component } from 'react';
import FoodListComponent from './FoodListComponent';
import SearchComponent from './SearchComponent';
import Header from './Header';

class SearchPanelComponent extends Component {
    render() {
        return (
        <div>
            <Header />
            <SearchComponent/>
            <FoodListComponent/>
        </div>
        )
    }
    }

export default SearchPanelComponent;