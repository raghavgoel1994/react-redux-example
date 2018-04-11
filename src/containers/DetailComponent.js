import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFoodDetails } from './../action/search';
import Header from './Header';
class DetailComponent extends Component {
    componentDidMount(){
        this.props.fetchFoodDetails(this.props.match.params.id);
    }
    ing() {
            return this.props.foodreducers.details.ing.desc.split(",").map((name,i) => {
                return (
                    <li key={i} className="list-group-item">{name}</li>
                )
            })
        
    }

    nutrient() {
            return this.props.foodreducers.details.nutrients.map((nutirent,i) => {
                return (
                    <li key={i} className="list-group-item">
					    <span ><strong>{nutirent.name}</strong></span>
                        <i class="fa fa-play align-middle" aria-hidden="true"></i>
                        <span  className="badge badge-primary badge-pill"><i>{nutirent.value}{nutirent.unit}</i></span>
                    </li>
                )
            })
        
    }
    
	  
    render() {

        let food = this.props.foodreducers.details;
        return (
            <div>
                <Header />
                <div className="container">			
			
                    <hgroup>
                        <h1 >Food Details <strong>(NDBNO: {food.ndbno})</strong></h1>
                        <h2 >{food.name}</h2>
                    </hgroup>
                    <br/>
                    <br/>
                    <div className="card">
                        <div className="card-body" >
                            <h3 className="card-title" >Ingredients</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            {
                                this.ing()
                            }
                        </ul>
                    </div>
                    <br/>
                    <br/>
                    <div className="card">
                        <div className="card-body" >
                            <h3 className="card-title" >Nutrients</h3>
                        </div>
                        <div>
                            <ul className="list-group list-group-flush">
                                {
                                    this.nutrient()
                                }
                            </ul>
                        </div>
                        </div>
                </div>
		
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
    return bindActionCreators(Object.assign({},{fetchFoodDetails:fetchFoodDetails}), dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailComponent);