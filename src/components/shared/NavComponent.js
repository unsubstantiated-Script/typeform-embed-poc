import React from "react";

import Icon from "@material-ui/core/Icon";

const NavComponent = () => {
	return (
		<header className='navbar'>
			<Icon className='burger-icon'>menu</Icon>
			<h2>Settings</h2>
			<Icon className='bell-icon'>notifications</Icon>
		</header>
	);
};

export default NavComponent;
