import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FavList extends Component {

    createFoodItems() {

        let filterFavFood = this.props.foodreducers.food.filter(
            (user) => { return this.props.foodreducers.fav.includes(user.ndbno); }
        );;
        if (this.props.foodreducers.fav.length == 0) {
            return (<p>No items in Favourites</p>)
        }
        else {
            return filterFavFood.map(user => {
                return (
                    <div>
                        <li key={user.ndbno}>{user.name}</li>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <ul>
                {this.createFoodItems()}
            </ul>
        )
    }
}
function mapStateToProps(state) {
    return {
        foodreducers: state.foodreducers
    }
}
export default connect(mapStateToProps)(FavList);