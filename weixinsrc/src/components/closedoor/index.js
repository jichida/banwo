/**
 * 
 */
import React from 'react';
import { connect } from 'react-redux';
import Icon from "../tools/icon.js";
import Scanning from "../../img/17.png";
import Circleborder from "../../img/16.png";
import Lock from "../../img/14.png";
import "./style.css"

class Page extends React.Component {
	
    render() {
        return (
            <div className="closedoorPage AppPage" style={{height:`${window.innerHeight}px`}}>
                <div className="mapcomponent">Map 组件</div>
                <div className="bottomlnk">
                    <div className="bg"><img src={Circleborder} /></div>
                    <div className="opendevicecontent">
                        <div className="tit">
                            <Icon width={40} height={40} number={9} />
                            <div className="title">您已关门</div>
                            <div className="c">消费时长</div>
                            <div className="c2">01:20:20</div>
                        </div>
                        <div className="cashier">
                            <span className="number"><b>此次消费：18元</b></span>
                            <span className="price">1元/15分钟</span>
                        </div>
                        <div className="backbtn" onClick={()=>{this.props.history.push("/")}}>返回首页</div>
                        <div className="tishi">15秒后自动返回首页</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Page);
