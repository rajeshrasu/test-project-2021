import React from 'react'
import {BrowserRouter as Switch,Route} from 'react-router-dom';
import HomePageComponent from '../../pages/home-page/index';


const LayoutContent = () => {
	return (
		<div style={{width:'100%',float: 'left'}}>
			      <Route exact path="/" component={HomePageComponent}/> 
		</div>
	)
};

export default LayoutContent;