import { motion } from "framer-motion";
import styled from "styled-components";

const BasicAnimation = () => {
  return (
    <Box
      initial={{ scale: 0, rotate: 0, translateZ: 0 }}
      animate={{ scale: 1, rotate: 360, translateZ: 360 }}
      transition={{ type: "spring", dampling: 5 }}
    />
  )
}

export default BasicAnimation;

const Box = styled(motion.div)`
  width: 14rem;
	height: 14rem;
	border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;