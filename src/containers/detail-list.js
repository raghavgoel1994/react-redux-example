import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DetailList extends Component {
    getNutrients(food) {
        return food.nutrients.map((user, index) => {
            return (
                <div>
                    <h5 key={user.nutrient_id}>nutrient Name   :  {user.nutrient}</h5>
                    <h5 >Nutrient Unit   :  {user.unit}</h5>
                    <h5 >Nutrient Value   :  {user.value}</h5>
                    <h5 >Nutrient Gm   :  {user.gm}</h5>
                    <br />
                </div>
            )
        })
    }
    createFoodItems() {

        let filterFavFood = this.props.foodreducers.food.filter(
            (user) => {
                return user.ndbno == this.props.match.params.id;
            }
        );
        return filterFavFood.map((user, index) => {
            return (
                <div style={{ margin: '0 auto' }}>
                    <h3 key={user.ndbno}>Food Name   :  {user.name}</h3>
                    <h3 >Food weight   :  {user.weight}</h3>
                    <h3 >Food Measure   :  {user.measure}</h3>
                    <br />
                    {
                        this.getNutrients(user)
                    }
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {
                    this.createFoodItems()
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        foodreducers: state.foodreducers
    }
}
export default connect(mapStateToProps)(DetailList);