/**
 * 选择登录方式
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginbg from "../../img/8.png";
import img_title from "../../img/3.png";
import Icontools from "../tools/icon";
import './style.css';

const innerHeight = window.innerHeight;

class Page extends React.Component {

    onClickLoginfn = (values)=>{
        this.props.onClickLogin(values);
    }
    
    render() {
        return (
            <div className="loginPage sellogin AppPage">
                <img src={loginbg} className="bg" />
                <div className="loginForm" style={{height: innerHeight+"px"}}>
                    <div className="formcontent">
                        <div className="lnk">
                            <a onClick={()=>{}}>
                                <span className="iconspan">
                                    <Icontools width={50} height={50} number={6} />
                                </span>
                                <span>微信登录</span>
                            </a>
                            <a onClick={()=>{}}>
                                <span className="iconspan">
                                    <Icontools width={40} height={40} number={11} />
                                </span>
                                <span>账号登录</span>
                            </a>
                        </div>
                    </div>
                    <img src={img_title} className="title" />
                </div>
            </div>
        );
    }
}

//Page.propTypes = {};
const pageFun = (dispatch) => {
    return {
        onClickLogin:(values)=>{
            //用户登录操作
            console.log(values);
        },
    }
};

//const data = () => {}
Page = connect(null,pageFun)(Page);
export default Page;
