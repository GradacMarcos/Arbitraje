import { Grid, Typography } from '@mui/material';
import Sidebar from '../../components/kit/MenuLeft/menuLeft';
import './EchangeList.scss';
import CustomBarChart from '../../components/kit/Graphic';

export default function Dashboard() {
	return (
		<Grid className="dashboard" container>
			<Grid className="dashboard-menu-left" container>
				<Sidebar />
			</Grid>
			<Grid className='dashboard-graphic' container>
				<CustomBarChart />
			</Grid>
		</Grid>
	);
}
