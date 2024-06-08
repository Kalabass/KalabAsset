import styled from 'styled-components';

const TitleWrapper = styled.div`
	font-size: 40px;
	margin-top: 20px;
	margin-bottom: 20px;
	font-weight: 600;
	color: white;
`;

const ContainerTitle: React.FC<IContainerTitleProps> = ({ title }) => {
	return <TitleWrapper>{title}</TitleWrapper>;
};

export default ContainerTitle;
