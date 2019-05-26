import React, { Component } from "react";
import "./style.css"
import me from "../../../../image/icon/me.png";

class ObjectItem extends Component {
    render() {
        const {
            data: {
                orderPicUrl, type
            }
        } = this.props;
        return (
           <div className="ObjectItem">
               <div className="ObjectItem__top">
                   <img
                       className="ObjectItem__pic"
                       src={ orderPicUrl }
                       alt=""
                   />
                   { this.compare(type) }
               </div>
           </div>
        );
    }

    compare = (type) => {
        if (type === 1) {
            return this.renderPreSaleList();
        } else if (type === 2) {
            return this.renderRaiseList();
        } else if (type === 3) {
            return this.renderCompleteList();
        }
    };

    // 返回预售列表函数
    renderPreSaleList = () => {
        return (
            <div className="ObjectItem__bottom">
                <div className="ObjectItem__title">{ this.props.data.title }</div>
                <p className="ObjectItem__msg">{ this.props.data.msg }</p>
                <span className="ObjectItem__type">{ this.props.data.statusText }</span>
                <span className="ObjectItem__time">{ this.props.data.time }</span>
            </div>
        )
    };

    // 返回筹集列表函数
    renderRaiseList = () => {
        return(
            <div className="ObjectItem__bottom">
                <span className="ObjectItem__remainingTime">剩余时间：{ this.props.data.remainingTime }天</span>
                <div className="ObjectItem__title">{ this.props.data.title }</div>
                <p className="ObjectItem__msg">{ this.props.data.msg }</p>
                <span className="ObjectItem__type">{ this.props.data.statusText }</span>

                <div className="ObjectItem__bar">
                    <div className="ObjectItem__bar__main">
                        <div className="ObjectItem__bar__left" style={{ width: this.BarLeftSetting() }} />
                        <div className="ObjectItem__bar__right" style={{ width: this.BarRightSetting() }}/>
                    </div>
                    <div className="ObjectItem__bar__msg">
                        <div className="ObjectItem__bar__msg__left">
                            <img  className="ObjectItem__bar__icon"
                                 src={ me }
                            />
                            { this.props.data.Number }
                        </div>
                        <p className="ObjectItem__bar__msg__right">已筹募金额：￥{ this.props.data.currentAmount }</p>
                    </div>
                </div>
            </div>
        )
    };

    // 进度条设置函数
    BarLeftSetting = () => {
        const Bar = Math.floor((this.props.data.currentAmount / this.props.data.targetAmount) * 100);
        return Bar + "%";
    };

    BarRightSetting = () => {
       return  (100 - Math.floor((this.props.data.currentAmount / this.props.data.targetAmount) * 100)) + "%";
    };

    // 返回完成列表函数
    renderCompleteList = () => {
        return (
            <div className="ObjectItem__bottom">
                <div className="ObjectItem__title">{ this.props.data.title }</div>
                <p className="ObjectItem__msg">{ this.props.data.msg }</p>
                <span className="ObjectItem__type">{ this.props.data.statusText }</span>

                <div className="ObjectItem__bar">
                    <div className="ObjectItem__bar__msg">
                        <div className="ObjectItem__bar__msg__left">
                            <img  className="ObjectItem__bar__icon"
                                  src={ me }
                            />
                            { this.props.data.Number }
                        </div>
                        <p className="ObjectItem__bar__msg__right">已筹募金额：￥{ this.props.data.currentAmount }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ObjectItem;
