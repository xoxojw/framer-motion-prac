import { motion } from "framer-motion";
import styled from "styled-components";

const Gestures = () => {
	return (
		<Box
			whileHover={{ scale: 1.2, rotate: 90 }}
			whileTap={{ scale: 1, borderRadius: "50%" }}
		>
			<Text>Hover and Grab Me!</Text>
		</Box>
	);
};

export default Gestures;

const Box = styled(motion.div)`
	width: 200px;
	height: 200px;
	background-color: rgba(255, 255, 255, 0.743);
	border-radius: 50px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	padding: 1rem;
	overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
	cursor: grab;
`;

const Text = styled.p`
  opacity: 1;
  transition: opacity 0.3 ease-in-out;
  ${Box}:hover & {
    opacity: 0;
  }
`
