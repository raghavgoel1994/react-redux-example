import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserToFav, searchUser } from './../action/search';
import { Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
class FoodList extends Component {

    createFoodItems() {
        console.log(this.props.foodreducers.fav);
        let filterFood = this.props.foodreducers.food.filter((user) => {
            return user.name.indexOf(this.props.foodreducers.init) !== -1;
        });;

        return filterFood.map((user, index) => {

            return (
                <div key={index}>
                    <li key={user.ndbno}>{user.name}
                        <Button bsStyle="primary" value={user.ndbno} onClick={this.props.addUserToFav.bind(this)}>Add to Favourite</Button>
                        <Link to={user.ndbno}>Details</Link>
                    </li>
                </div>
            )
        })
    }
    render() {
        return (
            <ul>
                <input style={{ marginTop: 10 }} onChange={this.props.searchUser.bind(this)} />
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, { searchUser: searchUser }, { addUserToFav: addUserToFav }), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);