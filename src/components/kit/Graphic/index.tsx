import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import SelectInput from '../Inputs/Select';

const data = [
	{ name: 'A', value: 10 },
	{ name: 'B', value: 20 },
	{ name: 'C', value: 15 },
	{ name: 'D', value: 25 },
	{ name: 'D', value: 25 },
	{ name: 'D', value: 25 },
	{ name: 'D', value: 25 },
	{ name: 'D', value: 25 },
	{ name: 'E', value: 18 },
];

const CustomBarChart = () => {
	return (
		<Grid>
			<Grid container>
				<Grid paddingLeft="12rem" item xs={10}>
					<Typography variant="h4" align="center" gutterBottom>
						Grafico de Ganancias
					</Typography>
				</Grid>
				<Grid item xs={2}>
					<SelectInput
						onChange={() => console.log()}
						items={[
							{
								value: 'hour',
								label: 'Hora',
							},
							{
								value: 'day',
								label: 'Dia',
							},
							{
								value: 'week',
								label: 'Semana',
							},
							{
								value: 'month',
								label: 'Mes ',
							},
							{
								value: 'year',
								label: 'Año',
							},
						]}
						label="Tiempo"
					/>
				</Grid>
			</Grid>
			<ResponsiveContainer width={1000} height={400}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" tick={{ fontSize: 14 }} />
					<YAxis tick={{ fontSize: 14 }} />
					<Tooltip />
					<Legend wrapperStyle={{ fontSize: 14 }} />
					<Bar dataKey="value" fill="#F689F6" barSize={40} label={{ fontSize: 14 }} />
				</BarChart>
			</ResponsiveContainer>
		</Grid>
	);
};

export default CustomBarChart;
