export const formatAmount = (amount: string): number => {
	const [integer, decimal] = amount.split('.');
	return Number(`${integer}.${decimal.slice(0, 2)}`);
};

export const formatName = (name: string): string => {
	const data = name.split(' ');
	if (data.length === 1) return name;
	const formatName = `${data[0]} ${data[data.length - 1]}`;
	return formatName;
};
