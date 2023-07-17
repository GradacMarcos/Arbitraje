import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';

interface Props {
	itemSelected?: string | number;
	onChange: (_value: string | number | any) => void;
	label?: string;
	items: {
		value: string | number;
		label: string | React.ReactElement;
	}[];
}

export default function SelectInput(props: Props) {
	const handleChange = (event: SelectChangeEvent) => {
		props.onChange(event.target.value);
	};

	return (
		<Grid container>
			<FormControl color="secondary" sx={{ minWidth: '100%' }}>
				<InputLabel id="demo-simple-select-helper-label">{props.label}</InputLabel>
				<Select
					className="select-input"
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={props.itemSelected?.toString()}
					label={props.label}
					onChange={handleChange}
				>
					{props.items.map((item) => (
						<MenuItem value={item.value}>{item.label}</MenuItem>
					))}
				</Select>
			</FormControl>
		</Grid>
	);
}
