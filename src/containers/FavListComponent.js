import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header'; 
class FavListComponent extends Component {

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
        console.log("fav List")
        return (
            <div>
                <Header></Header>
                <ul>
                    {this.createFoodItems()}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        foodreducers: state.foodreducers
    }
}

/* function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({},{}), dispatch)
} */
export  default connect(mapStateToProps)(FavListComponent);