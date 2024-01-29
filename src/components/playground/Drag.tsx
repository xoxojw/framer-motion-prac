import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const boxVariants: Variants = {
  hover: { scale: 1.5, rotate: 90 },
  click: { scale: 1.2, borderRadius: "30px" },
  drag: { backgroundColor: "#9ab5da", transition: { duration: 3 } }
};

const Drag = () => {
	const constraintRef = useRef<HTMLDivElement>(null);
	return (
		<ContainerBox ref={constraintRef}>
			<DraggableBox
        drag
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
				dragConstraints={constraintRef}
				dragSnapToOrigin
				dragElastic={0.5} // 당기는 힘(0에서 1 사이의 값, default 0.5) - 1이면 마우스대로 따라감
			/>
		</ContainerBox>
	);
};

export default Drag;

const ContainerBox = styled(motion.div)`
	width: 14rem;
	height: 14rem;
	border-radius: 50px;
	background-color: rgba(255, 255, 255, 0.2);
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DraggableBox = styled(motion.div)`
	width: 100px;
	height: 100px;
	background-color: white;
	border-radius: 30px;
	margin: 0.5rem;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	cursor: grab;
`;
