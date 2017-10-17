/**
 * 
 */
import React from 'react';
import { connect } from 'react-redux';
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
        // const script = document.createElement("script");
        // script.src = "http://webapi.amap.com/maps?v=1.3&key=788e08def03f95c670944fe2c78fa76f&callback=init&&plugin=AMap.Geocoder,AMap.Scale,AMap.OverView,AMap.ToolBar,AMap.Driving";
        // script.async = true;
        // window.init = ()=>{
        //       const scriptui = document.createElement("script");
        //       scriptui.src = "http://webapi.amap.com/ui/1.0/main.js?v=1.0.10";
        //       scriptui.async = true;
        //       document.body.appendChild(scriptui);
        //       scriptui.onload = ()=>{
        //          window.initamaploaded = true;
        //         this.props.dispatch(map_setmapinited(true));
        //       }
        // }
        // document.body.appendChild(script);
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