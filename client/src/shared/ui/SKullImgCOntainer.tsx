import styled from 'styled-components';

interface ISkullImgProps {
	width: string;
}

const ImgContainer = styled.div<ISkullImgProps>`
	width: ${props => props.width};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledImg = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const SKullImgCOntainer: React.FC<ISkullImgProps> = ({ width }) => {
	return (
		<ImgContainer width={width}>
			<StyledImg
				src='../../../src/shared/assets/skullMini.png'
				alt='skullImg'
			></StyledImg>
		</ImgContainer>
	);
};

export default SKullImgCOntainer;
