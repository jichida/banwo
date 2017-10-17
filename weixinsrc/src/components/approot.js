/**
 * 
 */
import React from 'react';
import { connect } from 'react-redux';
import {map_setmapinited, carmapshow_destorymap, ui_setmapstyle} from '../actions';
import { Route,Redirect,Switch} from 'react-router-dom';


import Index from './index/';
import Login from './login';
import Register from './register';
import Register2 from './register/step2';
import Resetpwd from './resetpwd';
import Resetpwd2 from './resetpwd/step2';
import Opendoor from './opendoor';
import Closedoor from './closedoor';
import Loginsel from './login/sel';
import Createorder from './createorder';
import Usercenter from './usercenter';


import "../css/common.css";


class AppRoot extends React.Component {

    componentWillMount() {
        
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className="AppContainer">
                <Switch>
                    <Route exact path="/" component={()=>(<Redirect to="/index"/>)} />
                    <Route path="/index" component={Index} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/register2" component={Register2} />
                    <Route path="/resetpwd" component={Resetpwd} />
                    <Route path="/resetpwd2" component={Resetpwd2} />
                    <Route path="/opendoor" component={Opendoor} />
                    <Route path="/closedoor" component={Closedoor} />
                    <Route path="/createorder" component={Createorder} />
                    <Route path="/loginsel" component={Loginsel} />
                    <Route path="/usercenter" component={Usercenter} />
                </Switch>
            </div>
        );
    }
}

export default connect()(AppRoot);