import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./footer.css";
import Logo from '../../assets/img/footer-Logo.png'

class PageFooter extends React.Component {
    render() {
        return (
            <div className="FooterContainer">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-1 col-lg-2">
							<div className="footer-logo">
								<img src={Logo} alt="Logo" />
							</div>
						</div>
						<div className="col-12 col-md-3 col-lg-2">
							<div className="footer-Menu">
								<Link to="/"><span>How it Works</span></Link>
		            			<Link to="/"><span>Features</span></Link>
		            			<Link to="/"><span>Why AvailCal</span></Link>
							</div>
						</div>
						<div className="col-12 col-md-3 col-lg-2">
							<div className="footer-Menu">
								<Link to="/"><span>Team & Community</span></Link>
		            			<Link to="/"><span>Terms of use </span></Link>
		            			<Link to="/"><span>Privacy Policy</span></Link>
							</div>
						</div>
						<div className="col-12 col-md-5 col-lg-6">
							<div className="CopyRightsContainer">
								<span>© 2021 AvailCal. All rights reserved.</span>
		            			<span className="FooterIconSet">
		            				<span>Get inspired...</span>
		            				<span className="FooterSetIcon">
		            					<Link to="">
		            						<i className="avc-facebook-f"></i>
		            					</Link>
		            					<Link to="">
		            						<i className="avc-twitter-f"></i>
		            					</Link>
		            					<Link to="">
		            						<i className="avc-link-f"></i>
		            					</Link>
		            					<Link to="">
		            						<i className="avc-insta-f"></i>
		            					</Link>
		            				</span>
		            			</span>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default PageFooter;