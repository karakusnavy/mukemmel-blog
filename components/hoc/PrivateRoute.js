import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Login from '../../pages/admin/index2';

export default ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				localStorage.getItem('x-Token') ? (
					window.location.pathname !== '/admin/login' ? (
						<Layout>
							<Component {...props} />
						</Layout>
					) : (
						<Redirect to={{ pathname: '/' }} />
					)
				) : (
					<Login />
				)
			}
		/>
	);
};