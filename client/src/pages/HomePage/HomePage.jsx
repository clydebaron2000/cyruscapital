import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../../dist/css/main.css';
// import Login from '../../components/GoogleAuth/login';
// import Logout from '../../components/GoogleAuth/logout';


import Navbar from '../../global-components/Navbar/Navbar'




export default class HomePage extends Component {

	render() {
		return (

			<div className="homepagebody theme--light">
				{/* <div>
					<div>navbar</div>
					<div>logo</div>
					<div>home</div>
					<div>about us</div>
					<div>strategy</div>
					<div>invest with us</div>
					<div>contact</div>
				</div> */}
				<Navbar/>
				<div>We Offer Opportunities</div>
				<div>
					<div>What We Do</div>
					<p>
					We are investors and managers of a diversified portfolio of commercial real estate. 
					We focus on assets often neglected by institutional capital which we believe provides greater appreciation in value.
					We choose development projects that enhances the quality of lives of individuals and families, and fosters prosperity and opportunities.
					Through careful stewardship, we invest capital on behalf of other investors, high net worth individuals and family offices who seek to benefit from allocating capital to the commercial real estate industry with an experienced team.
					</p>
				</div>
				<div>Stewardship of what we have been trusted with</div>
				<div>
					<div>Why Cyrus Capital?</div>
					<div>
						{/*2x3 grid */}
						{/* (maybe a descriptor for each) */}
						<div>We target Value-add opportunities</div>
						<div>Fearless but educated investments</div>
						<div>20+ years of combined experience</div>
						<div>We combed the marktetplace for deals</div>
						<div>operational experience</div>
						<div>We focus on creating passive income</div>
					</div>
				</div>
				<footer>2020 Created by Cyrus Capital, LLC Powered by God</footer>
			</div>

		)
	}
}