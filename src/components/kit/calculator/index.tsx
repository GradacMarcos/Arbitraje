import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';
import './Calculator.scss';

const ResultDisplay: React.FC<{ result: string | null }> = ({ result }) => {
	return (
		<Box className="result-display">
			<Typography variant="h6">Resultado:</Typography>
			<Typography>{result}</Typography>
		</Box>
	);
};

const DollarCalculator: React.FC = () => {
	const [capital, setCapital] = useState('');
	const [buyPrice, setBuyPrice] = useState('');
	const [sellPrice, setSellPrice] = useState('');
	const [commission, setCommission] = useState('');
	const [result, setResult] = useState<string | null>(null);

	const calculate = () => {
		const capitalValue = parseFloat(capital);
		const buyPriceValue = parseFloat(buyPrice);
		const sellPriceValue = parseFloat(sellPrice);
		const commissionValue = parseFloat(commission);

		const totalBuy = capitalValue / buyPriceValue;
		const amountAfterCommission = totalBuy - totalBuy * (commissionValue / 100);
		const netProfitInDollars = amountAfterCommission * sellPriceValue;
		const netProfitInPesos = netProfitInDollars.toFixed(2);

		const gainFromMovement = netProfitInDollars - capitalValue;
		const gainFromMovementInPesos = gainFromMovement.toFixed(2);

		setResult(`Ganancia Neta: $${netProfitInPesos}\nGanancia obtenida por movimiento: $${gainFromMovementInPesos}`);
	};

	return (
		<Box className="calculator">
			<Typography variant="h4">Calculadora de Dólares</Typography>

			<TextField
				type="number"
				label="Capital"
				value={capital}
				onChange={(e) => setCapital(e.target.value)}
				placeholder="Ingrese su capital"
			/>

			<TextField
				type="number"
				label="Precio de compra en pesos"
				value={buyPrice}
				onChange={(e) => setBuyPrice(e.target.value)}
				placeholder="Ingrese el precio de compra en pesos"
			/>

			<TextField
				type="number"
				label="Precio de venta en pesos"
				value={sellPrice}
				onChange={(e) => setSellPrice(e.target.value)}
				placeholder="Ingrese el precio de venta en pesos"
			/>

			<TextField
				type="number"
				label="Comisión (%)"
				value={commission}
				onChange={(e) => setCommission(e.target.value)}
				placeholder="Ingrese la comisión"
			/>

			<Button variant="contained" onClick={calculate}>
				Calcular
			</Button>
			<Grid>{result && <ResultDisplay result={result} />}</Grid>
		</Box>
	);
};

export default DollarCalculator;
