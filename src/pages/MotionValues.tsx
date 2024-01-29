import { Variants, motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

const arrowVariants: Variants = {
	start: { fill: "rgba(255, 255, 255, 0.3);", y: 15 },
	end: {
		fill: "rgba(255, 255, 255, 0.7)",
		y: 0,
		transition: { duration: 0.7, repeat: Infinity, repeatType: "reverse" },
	},
};

const MotionValues = () => {
	const x = useMotionValue(0);
	const xInput = [-800, 0, 800];
	const rotateZ = useTransform(x, xInput, [-360, 0, 360],);
	const gradient = useTransform(
		x,
		xInput,
		[
			"linear-gradient(90deg,##5B63FB 0%,##45E9AD 100%)",
			"linear-gradient(110deg,#9195A2 0%,#272839 100%)",
			"linear-gradient(90deg,#FFDCA0 0%,#F66C6C 100%)"
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
			<Container>
				<Box
					drag="x"
					dragSnapToOrigin
					style={{ x, rotateZ }}
				>
					<p>Rotate me!😆</p>
				</Box>
				<AnglesDown
					variants={arrowVariants}
					initial="start"
					animate="end"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
				</AnglesDown>
			</Container>
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

const Container = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
	flex-direction: column;

	margin-top: 10%;
	gap: 50vh;
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

const AnglesDown = styled(motion.svg)`
	width: 2rem;
	height: 2rem;
	fill: rgba(255, 255, 255, 0.3);
`

const TouchDownTextContainer = styled.div`
  padding: 3rem 0;

  p {
    margin: 0;
    padding: 1rem;
    font-size: 1.5rem;
		color: #fff;
  }
`;
