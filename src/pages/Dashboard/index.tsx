import { Grid } from '@mui/material';
import './EchangeList.scss';
import CustomBarChart from '../../components/kit/Graphic';

export default function Dashboard() {
	return (
		<Grid className="dashboard" container>
			<Grid className="dashboard-graphic" container>
				<CustomBarChart />
			</Grid>
		</Grid>
	);
}
