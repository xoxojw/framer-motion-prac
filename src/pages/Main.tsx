import styled from "styled-components";
import BasicAnimation from "components/playground/BasicAnimation";
import VariantsPrac from "components/playground/VariantsPrac";
import Gestures from "components/playground/Gestures";
import Drag from "components/playground/Drag";
import PathIcon from "components/playground/PathIcon";

const Main = () => {
	return (
		<Wrapper>
			<GridBox>
				<BasicAnimation />
				<VariantsPrac />
				<Gestures />
        <Drag />
        <PathIcon />
			</GridBox>
		</Wrapper>
	);
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
	width: 100vw;
	height: 100vh;
	/* background: linear-gradient(135deg,#9195a2,#272839); */

	justify-content: center;
	align-items: center;
`

const GridBox = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4rem;
	margin: 4rem auto;
	place-items: center;
`;