import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Dashboard from './Dashboard';
import Movement from './Movement';
import Sidebar from '../components/kit/MenuLeft/menuLeft';
import Calculator from './calculator';

export const DesktopContext = React.createContext<boolean | null>(true);

export default function Arbitraje() {
	const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
	useEffect(() => {
		const setIfIsDesktop = () => setIsDesktop(window.innerWidth >= 900);
		setIfIsDesktop();
		/* eslint-disable-next-line no-restricted-globals */
		addEventListener('resize', setIfIsDesktop);
		/* eslint-disable-next-line no-restricted-globals */
		return () => removeEventListener('resize', setIfIsDesktop);
	}, []);
	const renderMenu = (desktopPage: JSX.Element) => () => {
		if (isDesktop === null) return <></>;
		if (isDesktop) {
			return <Sidebar>{desktopPage}</Sidebar>;
		}
	};
	return (
		<DesktopContext.Provider value={isDesktop}>
			<Grid>
				<Router>
					<Routes>
						<Route path="/" element={renderMenu(<Dashboard />)()} />
						<Route path="/movement" element={renderMenu(<Movement />)()} />
						<Route path="/calculator" element={renderMenu(<Calculator />)()} />
					</Routes>
				</Router>
			</Grid>
		</DesktopContext.Provider>
	);
}
