import { motion } from "framer-motion";
import styled from "styled-components";

const svgVariants = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    pathLength: 1,
    fill: "rgb(255, 255, 255)",
    transition: {
      repeat: Infinity,
      duration: 5,
    }
  },
}

const AppleSvg = () => {
  return (
    <Container>
      <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <motion.path
          variants={svgVariants}
          initial="start"
          animate="end"
          transition={{
            // variants에 duration을 주면 pathLength, fill이 똑같은 duration을 갖지만
            // 각각 다른 타이밍에 animate하거나 각기 다른 설정을 하고 싶다면 props 사용
            default: { duration: 5 }, // default는 기본적으로 모든 속성에 적용
            fill: { duration: 2, delay: 3 } // fill만 제외하고
          }}
          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
        />
      </Svg>
    </Container>
  );
};

export default AppleSvg;

const Container = styled.div`
	width: 14rem;
	height: 14rem;
	border-radius: 50px;
	display: flex;
	place-content: center;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.2);
`;

const Svg = styled(motion.svg)`
  width: 40%;
  overflow: visible;
  stroke: rgb(255, 255, 255);
  stroke-width: 3;
`
