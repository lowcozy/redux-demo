import React, {Component} from "react";
import {connect} from 'react-redux';

class FoodDetail extends Component{
    render() {
        if(!this.props.selectFood)
        {
            return (
                <h2>select</h2>
            )
        }
        return(
            <div>
                <p>{this.props.selectFood.name}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { selectFood: state.selectFood }
}

let FoodDetailContainer = connect(mapStateToProps)(FoodDetail);

export default FoodDetailContainer;