export function DateFormat(date: Date) {
	const newDate = new Date(date);

	const year = newDate.getFullYear();
	const month = newDate.getMonth() + 1;
	const day = newDate.getDate();

	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
}
