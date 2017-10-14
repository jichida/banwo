/**
 * 
 */
import React from 'react';
import { connect } from 'react-redux';
import Scanning from "../../img/17.png";
import Circleborder from "../../img/16.png";
import Icon from "../tools/icon";
import "./style.css"

class Page extends React.Component {
	
    render() {
        return (
            <div className="indexPage AppPage" style={{height:`${window.innerHeight}px`}}>
                <div className="mapcomponent">Map 组件</div>
                <div className="bottomlnk">
                	<div className="bg"><img src={Circleborder} /></div>
                	<div className="lnk">
	                	<div onClick={()=>{this.props.history.push("/usercenter")}}>
	                		<Icon number={11} width={50} height={50} />
	                		<span>个人中心</span>
	                	</div>
	                	<div className="centerlnk" onClick={()=>{this.props.history.push("/scanning")}}>
	                		<img src={Scanning} width="40" />
	                		<span>扫码开门</span>
	                	</div>
	                	<div onClick={()=>{this.props.history.push("/orders")}}>
	                		<Icon number={12} width={50} height={50} />
	                		<span>订单管理</span>
	                	</div>
	                	
	                </div>
                </div>
            </div>
        );
    }
}

export default connect()(Page);
