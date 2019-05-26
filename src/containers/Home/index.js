import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Category from './components/Category';
import ObjectMain from './components/ObjectMain';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { actions as homeActions, getRaise, getSlider } from "../../redux/modules/home";


const data = {
    title: "首 页"
};

class Home extends Component {
    render() {
        const { slider, raise } = this.props;
        return (
            <div>
                <Header data = { data }/>
                <Category data = { slider } />
                <ObjectMain data = { raise }/>
                <Footer/>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        slider: getSlider(state),
        Raise: getRaise(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        homeActions: bindActionCreators(homeActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);