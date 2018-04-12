import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserToFav, searchUser, fetchFood } from './../action/search';
import { Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
class FoodListComponent extends Component {

    componentDidMount() {
        this.props.fetchFood("");
    }
    createFoodItems() {
        return this.props.foodreducers.food.map((user, index) => {
            return (

                <div className="col-sm-4" style={{ marginBottom: '10px' }}>
                    <div className="card" style={{ height: '100%' }}>
                        <div className="card-header">
                            <div className="col-sm-9">
                            <h5 className="card-title" style={{ margin: '0' }}>{user.ndbno}</h5>
                            </div>
                            <div className="col-sm-3">
                            <img src="/star.png" style={{height:'28px',width:'28px'}} onClick={this.props.addUserToFav.bind(this,user.ndbno)} />
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <p className="card-text">{user.name}</p>
                        </div>
                        <div><Link to={user.ndbno} className="btn btn-primary col-sm-12">Details</Link></div>
                    </div>
                </div>

            )
        })
    }
    render() {
        if (this.props.foodreducers.fetching) {
            return (
                <div className="container">
                    <div className="lds-circle" style={{ marginTop: '10%' }}></div>
                    <h2 style={{ textAlign: 'center' }}>FETCHING .... ! </h2>
                </div>
            )
        }
        else if (this.props.foodreducers.error) {
            return (
                <div className="container" style={{ marginTop: '20px' }}>
                    <h2>NO DATA FOUND .... ! </h2>
                </div>
            )
        }
        else {
            return (
                <div className="container" id="foodlistmargn">
                    <div className="row">
                        {this.createFoodItems()}
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        foodreducers: state.foodreducers
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, { fetchFood: fetchFood }, { searchUser: searchUser }, { addUserToFav: addUserToFav }), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodListComponent);