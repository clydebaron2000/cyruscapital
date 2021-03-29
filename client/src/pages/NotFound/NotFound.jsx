import React from 'react';
import { Link } from 'react-router-dom';
import '../../dist/css/main.css';

const NotFound = () => {
	return (
	<div>
	  <h2>404 - Page noot found!</h2>
	  <p><Link to="/">Head back to home</Link></p>
	</div>
	);
};

export default NotFound;