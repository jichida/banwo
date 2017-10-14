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
import Loginsel from './login/sel';


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
                    <Route path="/loginsel" component={Loginsel} />
                </Switch>
            </div>
        );
    }
}

export default connect()(AppRoot);