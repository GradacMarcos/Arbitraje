import { Grid, Typography } from '@mui/material';
import BasicTable from '../../components/kit/BasicTable';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import InfoIcon from '@mui/icons-material/Info';
import TypographyStatus from '../../components/kit/TypographyStatus';
import { useState } from 'react';
import { defaultPaginateOptions } from '../../utils/generalServiceResponses';

export default function Movement() {
	const [paginateOptions, setPaginateOptions] = useState(defaultPaginateOptions);
	return (
		<Grid container>
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
					'Fecha',
					'Cantidad operando',
					'Criptomonedas',
					'Moneda Fiat',
					'Monto',
					'Precio Compra/Venta',
					'Cambio',
					'Echange',
					'Ganancias/Perdidas',
				]}
				rows={[]}
				// Paginate options
				currentPage={0}
				rowsPerPage={1}
				setCurrentPage={(page: number) => {
					setPaginateOptions({ ...paginateOptions, page });
				}}
				totalItems={11}
			/>
		</Grid>
	);
}
