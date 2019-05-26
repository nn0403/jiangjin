import React, { Component } from 'react';
import "./style.css";
import home from "../../image/icon/首页.png";
import homeActive from "../../image/icon/首页(1).png";
import my from "../../image/icon/me.png";
import myActive from "../../image/icon/我的(1).png";

class Footer extends Component {
    render() {
        return(
            <div className="Footer">
                <a className="Footer__left">
                    <img src = { homeActive } alt = ""/>
                    <span className="Footer__homeTitle">首页</span>
                </a>
                <div className="Footer__right">
                    <img src = { my } alt = ""/>
                    <span className="Footer__myTitle">我的</span>
                </div>
            </div>
        )
    };
}

export default Footer;