/**
 * 账号登录
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginbg from "../../img/8.png";
import back from "../../img/4.png";
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
                    <div className="li" style={{width: "240px"}}>
                        <span style={{width: "70px"}}><i>设置密码</i></span>
                        <Field
                            name="phonenumber"
                            id="phonenumber"
                            placeholder=""
                            type="password"
                            component={ InputValidation }
                            validate={[ required ]}
                        />
                    </div>
                    <div className="li" style={{width: "240px"}}>
                        <span style={{width: "70px"}}><i>确认密码</i></span>
                        <Field
                            name="verification"
                            id="verification"
                            placeholder=""
                            type="password"
                            component={ InputValidation }
                            validate={[ required ]}
                        />
                    </div>
                    <div
                        className="btn"
                        disabled={pristine || submitting}
                        onClick={handleSubmit(onClickLogin)}
                        style={{margin: "29px 0"}}
                        >
                        注册
                    </div>

                    <div className="lnk" style={{padding: "0"}}>
                        <a href="#"><img src={back} width={20} /></a>
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
            <div className="loginPage AppPage">
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
