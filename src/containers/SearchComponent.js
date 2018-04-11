import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFood } from './../action/search';
class SearchComponent extends Component {

    fetchFoodItems(event){
    this.props.fetchFood(event.target.value);
    }
    render() {
        return (
            <div className="container" style={{marginTop:'20px'}}>
                <input type="text" onChange={this.fetchFoodItems.bind(this)} className="form-control"   placeholder="Enter Food Name"/>
            </div>
        )
    }
    }

function mapStateToProps(state) {
    return {
        foodreducers: state.foodreducers
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({},{fetchFood:fetchFood}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);