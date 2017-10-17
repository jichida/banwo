/**
 * 
 */
import React from 'react';
import { connect } from 'react-redux';
import Avatar from "../../img/~1.png";
import Circleborder from "../../img/16.png";
import Icon from "../tools/icon";
import "./style.css"


class Page extends React.Component {
	
    render() {
        return (
            <div className="usercenterPage AppPage" style={{height:`${window.innerHeight}px`}}>
                <div className="head">
					<img src={Avatar} width={100} />
					<span className="i">伴我自助健身</span>
					<span className="yue"><b>2800.00</b><i>元</i></span>
					<span className="yuei">余额</span>
					<div className="chongzhi">充值</div>
                </div>
                <div className="bottomlist">
                	<div className="bg"><img src={Circleborder} /></div>
                	<div className="tit">交易记录</div>
                	<div className="list">
                		<ul>
                			<li><div><span>微信转入</span><span>2017/09/13</span></div><div>+800.00元</div></li>
                			<li><div><span>余额付款</span><span>2017/09/13</span></div><div>-18.00元</div></li>
                			<li><div><span>余额付款</span><span>2017/09/13</span></div><div>-10.00元</div></li>
                			<li><div><span>余额付款</span><span>2017/09/13</span></div><div>-10.00元</div></li>
                			<li><div><span>余额付款</span><span>2017/09/13</span></div><div>-10.00元</div></li>
                			<li><div><span>余额付款</span><span>2017/09/13</span></div><div>-10.00元</div></li>
                			<li><div><span>余额付款</span><span>2017/09/13</span></div><div>-10.00元</div></li>
                			<li><div><span>余额付款</span><span>2017/09/13</span></div><div>-10.00元</div></li>
                			<li><div><span>余额付款</span><span>2017/09/13</span></div><div>-10.00元</div></li>
                		</ul>
	                </div>
                </div>
            </div>
        );
    }
}

export default connect()(Page);
