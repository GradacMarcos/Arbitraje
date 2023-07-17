import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Dashboard from './Dashboard';

export const DesktopContext = React.createContext<boolean | null>(true);

export default function Arbitraje() {
	return (
			<Grid className="garage">
				<Router>
					<Routes>
						<Route path="/" element={<Dashboard />} />
					</Routes>
				</Router>
			</Grid>
	);
}
