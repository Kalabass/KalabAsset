const Child: React.FC<{ onClick: () => void }> = ({ onClick }) => {
	console.log('Child rendered');
	return <button onClick={onClick}>inc</button>;
};

export default Child;
