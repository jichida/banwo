/**
 * 账号登录
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginbg from "../../img/8.png";
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, Form, formValueSelector  } from 'redux-form';
import './style.css';
import img_title from "../../img/3.png";
import img_go from "../../img/2.png";
import {
    required,
    phone,
    InputValidation
} from "../tools/formvalidation"
const innerHeight = window.innerHeight;

export class PageForm extends Component {
    render(){
        const { handleSubmit,onClickLogin,pristine,submitting } = this.props;
        return (
            <Form
                className="loginForm"
                onSubmit={handleSubmit(onClickLogin)}
                style={{height: innerHeight+"px"}}
                >
                <div className="formcontent">
                    <div className="li" >
                        <span><i>手</i><i>机</i><i>号</i></span>
                        <Field
                            name="phonenumber"
                            id="phonenumber"
                            placeholder=""
                            type="text"
                            component={ InputValidation }
                            validate={[ required, phone ]}
                        />
                    </div>
                    <div className="li">
                        <span><i>验</i><i>证</i><i>码</i></span>
                        <Field
                            name="verification"
                            id="verification"
                            placeholder=""
                            type="text"
                            component={ InputValidation }
                            validate={[ required ]}
                        />
                    </div>
                    <div className="lnk">
                        <a href="#">点此获取短信验证码</a>
                    </div>
                    <div
                        className="btn"
                        disabled={pristine || submitting}
                        onClick={handleSubmit(onClickLogin)}
                        >
                        下一步
                    </div>
                </div>
                <img src={img_title} className="title" />
            </Form>
        )
    }
}

PageForm = reduxForm({
    form: 'LoginPageForm'
})(PageForm);

class Page extends React.Component {

    onClickLoginfn = (values)=>{
        this.props.onClickLogin(values);
    }
    
    render() {
        return (
            <div className="loginPage resetpwdPage AppPage">
                <img src={loginbg} className="bg" />
                <PageForm onClickLogin={this.onClickLoginfn} />
            </div>
        );
    }
}

// Page.propTypes = {};
const pageFun = (dispatch) => {
    return {
        onClickLogin:(values)=>{
            //用户登录操作
            console.log(values);
        },
    }
};

// const data = () => {}
Page = connect(null,pageFun)(Page);
export default Page;
