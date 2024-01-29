import { motion, Variants } from "framer-motion";
import styled from "styled-components";

// const myVars: Variants = {
//   start: { scale: 0 },
//   end: { scale: 1, transition: { type: "spring", damping: 10 } }
// }

const boxVars: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const circleVars: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
  }
}


const VariantsPrac = () => {
  const circles = new Array(4).fill(0);
  return (
		<Wrapper>
      <Box
				variants={boxVars}
				initial="hidden"
				animate="visible"
			>
				{circles.map((circle, idx) => (
					<Circle
						key={idx}
						variants={circleVars}
					/>
				))}
			</Box>
		</Wrapper>
	);
}

export default VariantsPrac;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`

const Box = styled(motion.div)`
  width: 12rem;
	height: 12rem;
	border-radius: 50px;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  background-color: white;
  border-radius: 50%;
  margin: 0.6rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;