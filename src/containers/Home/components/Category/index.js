import React, { Component } from "react";
import Slider from "react-slick";
import './style.css'


class Category extends Component {
    render() {
        const { data } = this.props;
        console.log(data);
        const settings = {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            swipeToSlide: true,
            autoplay: true
        };

        return (
            <div className = "category">
                <Slider { ...settings }>
                    { data.map((item, index) => {
                        return (
                            <div className = "category__section" key = { item.id }>
                                <img className = "category__icon" src = { item.image } alt = "" />
                            </div>
                        );
                    }) }
                </Slider>
            </div>
        );
    }
}

export default Category;
