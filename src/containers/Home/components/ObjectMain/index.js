import React, { Component } from "react";
import ObjectItem from "../ObjectItem"
import "./style.css"

const data = [
    {
        id: "o-2",
        statusText: "预告中",
        orderPicUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559252623&di=39fc5d2b662d69be3722b83b8001b976&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.weimob.com%2Fstatic%2Fad%2F6e%2F6a%2Fimage%2F20140103%2F20140103095433_18866.jpg",
        title: "贵州贵酒",
        msg: "融资信息仅对合格投资人开放",
        time: "发布倒计时2小时59分",
        money: null,
        Number: null,
        type: 1
    },
    {
        id: "o-3",
        statusText: "筹集中",
        orderPicUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558661148197&di=3071686bf08aafdca17c6945c72f1a1e&imgtype=0&src=http%3A%2F%2Ffile09.zk71.com%2FFile%2FCorpProductImages%2F2015%2F04%2F02%2F0_xianggangdade_3615_20150402205602.jpg",
        title: "茅台酒",
        msg: "融资信息仅对合格投资人开放",
        time: null,
        remainingTime: 25,
        targetAmount: 8000.00,
        currentAmount: 2000.00,
        Number: 2467,
        type: 2
    },
    {
        id: "o-4",
        statusText: "已售窅",
        orderPicUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558661213241&di=ddad4024d9079ffeeab9323a692143eb&imgtype=0&src=http%3A%2F%2Fhot.23.cn%2Fupload%2Farticle%2F20150108%2F79859074341420707570.jpg",
        title: "五粮液酒",
        msg: "融资信息仅对合格投资人开放",
        time: null,
        targetAmount: 8000.00,
        currentAmount: 8000.00,
        Number: 3000,
        type: 3
    }
];

const tabTitles = [ "全部", "预告", "筹集", "售窅" ];

class ObjectMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        };
    }

    render() {
        const { currentTab } = this.state;
        return (
            <div className = "ObjectMain">
                <div className = "ObjectMain__menu">
                    { tabTitles.map((item, index) => {
                        return (
                            <div key = { index } className = "ObjectMain__tab"
                                 onClick = { this.handleClickTab.bind(this, index) }>
                <span
                    className = {
                        currentTab === index
                            ? "ObjectMain__title ObjectMain__title--active"
                            : "ObjectMain__title"
                    }
                >
                  { item }
                </span>
                            </div>
                        );
                    }) }
                </div>
                <div className = "ObjectMain__content">
                    { data && data.length > 0
                        ? this.renderOrderList(data)
                        : this.renderEmpty() }
                </div>
            </div>
        );
    }

    renderOrderList = data => {
        return data.map(item => {
            return (
                <ObjectItem key = { item.id } data = { item }/>
            )
        })
    };

    renderEmpty = () => {
        return (
            <div className = "ObjectMain__empty">
                <div className = "ObjectMain__emptyIcon"/>
                <div className = "ObjectMain__emptyText1">此栏目无相关信息</div>
                <div className = "ObjectMain__emptyText2">等待发行筹集</div>
            </div>
        )
    };

    handleClickTab = (index) => {
        this.setState({
            currentTab: index
        })
    }
}

export default ObjectMain;
