import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

const MotionValues = () => {
	const x = useMotionValue(0);
	const xInput = [-800, 0, 800];
	const rotateZ = useTransform(x, xInput, [-360, 0, 360],);
	const gradient = useTransform(
		x,
		xInput,
		[
			"linear-gradient(135deg,##5B63FB 0%,##45E9AD 100%)",
			"linear-gradient(135deg,#9195A2 0%,#272839 100%)",
			"linear-gradient(135deg,#FFDCA0 0%,#F66C6C 100%)"
		]
	);
  
	console.log(x);
	// 이 때 x가 바뀌어도 console.log가 계속해서 찍히지 않는데, motion value가 바뀌어도 컴포넌트가 리렌더링 되는 것이 아니기 때문이다.
  
	// 실제 motion value 요소 값의 변화를 확인하고 싶다면 useMotionValueEvent 훅을 사용
	// useMotionValueEvent(x, "change", (el) => console.log(el));
  
	const { scrollY, scrollYProgress } = useScroll();
	// useMotionValueEvent(scrollY, "change", (value) => console.log(value));
	// useMotionValueEvent(scrollYProgress, "change", (value) => console.log(value));

	return (
		<BackGround style={{ background: gradient }}>
			<ProgressBar style={{ scaleX: scrollYProgress }} />
			<Box
				drag="x"
				dragSnapToOrigin
				style={{ x, rotateZ }}
			>
				<p>Rotate me!😆</p>
			</Box>
			<TouchDownTextContainer>
        <p>🛬 Touch Down!</p>
      </TouchDownTextContainer>
		</BackGround>
	);
};

export default MotionValues;

const BackGround = styled(motion.div)`
	height: 300vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const ProgressBar = styled(motion.div)`
	width: 100vw;
	position: fixed;
	top: 0;
	height: 10px;
	background-color: #43bf85;
	transform-origin: 0%;
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  cursor: grab;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

	flex-direction: column;

	margin-top: 10%;

  p {
    font-size: 1.5rem;
    opacity: 1;
		transition: all 0.5s ease-in-out;
  }

  &:active {
    p {
      opacity: 0;
    }
  }
`;

const TouchDownTextContainer = styled.div`
  padding: 3rem 0;

  p {
    margin: 0;
    padding: 1rem;
    font-size: 1.5rem;
		color: #fff;
  }
`;
