/**
 * 
 */
import React from 'react';
import { connect } from 'react-redux';
import Scanning from "../../img/17.png";
import Icon from "../tools/icon.js";
import Circleborder from "../../img/16.png";
import Lock from "../../img/14.png";
import "./style.css"

class Page extends React.Component {
	
    render() {
        return (
            <div className="createorderPage AppPage" style={{height:`${window.innerHeight}px`}}>
                <div className="mapcomponent">Map 组件</div>
                <div className="bottomlnk">
                	<div className="bg"><img src={Circleborder} /></div>
                	<div className="opendevicecontent">
						<div className="tit">
                            <Icon width={40} height={40} number={9} />
							<div className="time">1:30:30</div>
							<div className="c">消费时长</div>
						</div>
						<div className="cost">
							<span className="number"><b>18</b><i>元</i></span>
                            <span className="price">1元/15分钟</span>
						</div>
                        <div className="costc">此次消费</div>
						<div className="tishi">提示：关门自动结算订单</div>
                	</div>
                </div>
            </div>
        );
    }
}

export default connect()(Page);
