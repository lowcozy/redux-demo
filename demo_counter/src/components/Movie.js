import React, { Component } from "react";
import { connect } from "react-redux";

class Movie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Movie</h1>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);
