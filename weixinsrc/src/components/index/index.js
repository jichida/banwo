/**
 * 
 */
import React from 'react';
import { connect } from 'react-redux';

class Page extends React.Component {
    
    render() {
        return (
            <div className="indexPage AppPage">
                这里是首页
            </div>
        );
    }
}

export default connect()(Page);
