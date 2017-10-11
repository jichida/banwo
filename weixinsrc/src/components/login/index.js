/**
 * 
 */
import React from 'react';
import { connect } from 'react-redux';
import loginbg from "../../img/8.png";
import { withRouter } from 'react-router-dom';
import './style.css';


export class PageForm extends Component {
    render(){
        const { handleSubmit,onClickLogin,pristine,submitting } = this.props;

        return (
            <Form
                className="loginForm"
                onSubmit={handleSubmit(onClickLogin)}
                >
                <div className="logo">
                    <span className="logoimg"></span>
                    <span className="logospan">LOGO</span>
                </div>
                <div className="li" >
                    <span className="icon">
                        <img src="newimg/25.png" alt='' />
                    </span>
                    <Field
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="User name"
                        type="text"
                        component={ InputValidation }
                        validate={[ required, phone ]}
                    />
                </div>
                <div className="li">
                    <span className="icon">
                        <img src="newimg/26.png" alt='' />
                    </span>
                    <Field
                        name="password"
                        id="password"
                        placeholder="Password"
                        type="password"
                        component={ InputValidation }
                        validate={[ required ]}
                    />
                </div>

                <br/>
                <br/>

                <div className="submitBtn">
                    <span
                        className="btn Default"
                        disabled={pristine || submitting}
                        onClick={handleSubmit(onClickLogin)}
                        >
                        登录
                    </span>
                    

                </div>
            </Form>
        )
    }
}

PageForm = reduxForm({
    form: 'LoginPageForm'
})(PageForm);

class Page extends React.Component {
    
    render() {
        return (
            <div className="loginPage AppPage">
                <img src={loginbg} className="bg" />
                <div className="loginform"></div>
            </div>
        );
    }
}

export default connect()(Page);