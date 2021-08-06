import React from 'react';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import LayoutContent from '../Content';

class WebLayOut extends React.Component {
	render() {
		return (
			<Router>
			<div style={{width: '100%',float: 'left'}}>
			<LayoutContent style={{ height: '100%' }}/>
			</div>
			</Router>
		);
	}
}

export default WebLayOut;