import { Grid, Typography } from '@mui/material';
import BasicTable from '../../components/kit/BasicTable';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from 'react';
import { defaultPaginateOptions } from '../../utils/generalServiceResponses';
import { MovementData, getMovementData } from '../../service/Movement';
import ButtonLevel from '../../components/kit/Buttons';
import { numericFormatter } from '../../utils/formatters';
import './Movement.scss';

export default function Movement() {
	const [paginateOptions, setPaginateOptions] = useState(defaultPaginateOptions);
	const [movementData, setMovementData] = useState<MovementData[]>([]);
	console.log(movementData);
	const handleMovementData = () => {
		(async () => {
			const data = await getMovementData();
			if (data !== undefined) {
				setMovementData(data);
			}
		})();
	};
	useEffect(handleMovementData, []);

	const operated = (side: boolean) => {
		return (
			<Typography className={`movement-field-operated ${side ? 'buy' : 'sell'}`} variant="h6">
				{side ? 'Compra' : 'Venta'}
			</Typography>
		);
	};
	return (
		<Grid className="movement" container>
			<Grid container>
				<Grid item xs={2}>
					<ButtonLevel variant="contained" title="Crear Movimiento" />
				</Grid>
				<Grid item xs={2}>
					<ButtonLevel variant="contained" title="Crear Movimiento" />
				</Grid>
			</Grid>
			<Grid className="basic-table" container>
				<BasicTable
					options={[
						{
							startIcon: <DeleteIcon />,
							label: 'Eliminar',
							onClick: () => console.log(),
						},
						{
							startIcon: <ModeEditIcon />,
							label: 'Editar',
							onClick: () => console.log(),
						},
						{
							startIcon: <InfoIcon />,
							label: 'Ver detalle',
							onClick: () => console.log(),
						},
					]}
					columns={[
						'Moneda Fiat',
						'Fecha',
						'Cantidad operando',
						'Criptomonedas',
						'Monto',
						'Precio Compra/Venta',
						'Cambio',
						'Echange',
						'Ganancias/Perdidas',
					]}
					rows={movementData.map((e) => {
						return [
							operated(e.side),
							e.date,
							numericFormatter(e.amount_operated),
							e.cripto,
							e.amount,
							e.price,
							e.Echange,
							e.result,
							e.badge,
						];
					})}
					// Paginate options
					currentPage={0}
					rowsPerPage={1}
					setCurrentPage={(page: number) => {
						setPaginateOptions({ ...paginateOptions, page });
					}}
					totalItems={11}
				/>
			</Grid>
		</Grid>
	);
}
