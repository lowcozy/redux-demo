import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {selectFood} from  "../actions";

class FoodList extends  Component{
    listFood() {
        let list = this.props.foods.map(
            (item) => {
                return (
                    <li onClick={
                        () => {
                            this.props.selectFood(item)
                        }
                    } key={item.id}>food name : {item.name}</li>
                );
            }
        );
        return list;
    };

    render() {
        return (
            <ul>
                {this.listFood()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return { foods: state.foods }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectFood : selectFood }, dispatch)
}

let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);

export default FoodContainer;
