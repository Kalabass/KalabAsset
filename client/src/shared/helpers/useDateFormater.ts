export function UseDateFormat(date: Date) {
	const newDate = new Date(date);

	const year = newDate.getFullYear();
	const month = newDate.getMonth() + 1;
	const day = newDate.getDate();

	const formattedDate = `${day}.${month}.${year}`;
	return formattedDate;
}
