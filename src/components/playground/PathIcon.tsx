import { motion } from "framer-motion";
import styled from "styled-components";

const PathIcon = () => {
	const icon = {
		hidden: {
			pathLength: 0,
			fill: "rgba(255, 255, 255, 0)",
		},
		visible: {
			pathLength: 1,
			fill: "rgba(255, 255, 255, 1)",
		},
	};
	return (
		<Container>
			<Path
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
    >
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </Path>
		</Container>
	);
};

export default PathIcon;

const Container = styled.div`
	width: 14rem;
	height: 14rem;
	border-radius: 50px;
	display: flex;
	place-content: center;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.2);
`;

const Path = styled(motion.svg)`
  width: 56%;
  overflow: visible;
  stroke: #fff;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
`