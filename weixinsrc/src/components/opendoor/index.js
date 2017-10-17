/**
 * 
 */
import React from 'react';
import { connect } from 'react-redux';
import Scanning from "../../img/17.png";
import Circleborder from "../../img/16.png";
import Lock from "../../img/14.png";
import "./style.css"

class Page extends React.Component {
	
    render() {
        return (
            <div className="opendevicePage AppPage" style={{height:`${window.innerHeight}px`}}>
                <div className="mapcomponent">Map 组件</div>
                <div className="bottomlnk">
                	<div className="bg"><img src={Circleborder} /></div>
                	<div className="opendevicecontent">
						<div className="tit">
							<div className="t">开锁成功</div>
							<div className="c">28秒后开始计费，请检查是否有异常</div>
						</div>
						<div className="progress">
							<img src={Lock} width={80} />
							<div className="progressline"><span></span></div>
							<span className="percentage">75%</span>
						</div>
						<div className="devicecode">设备编号: 210363</div>
                	</div>
                </div>
            </div>
        );
    }
}

export default connect()(Page);
