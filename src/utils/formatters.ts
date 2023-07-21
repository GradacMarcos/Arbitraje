import { numericFormatter as reactNumericFormatter } from 'react-number-format';
import Moment from 'moment';

// function to format numbers as currency
// example: 1234.56 -> $1,234.56
export function numericFormatter(num: string | number): string {
	if (typeof num === 'number') num = num.toString();
	return reactNumericFormatter(num, {
		decimalScale: 2,
		fixedDecimalScale: true,
		thousandSeparator: true,
		prefix: '$',
	});
}

// function to format dates
// example: 2020-01-01 -> 01/01/2020
export function dateFormatter(dateStr: string, withHours: boolean = false): string {
	if (!dateStr) return '-';
	return Moment(dateStr).format('DD-MM-YYYY' + (withHours ? ' HH:mm' : ''));
}
