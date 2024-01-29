import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const parentsVars: Variants = {
  hidden: { opacity: 1, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3
    }
  }
}

const childrenVars: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
  }
}

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <NavContainer variants={parentsVars} initial="hidden" animate="visible">
        <NavTitle onClick={() => navigate('/')}>Framer-motion Playground</NavTitle>
        <NavLists variants={childrenVars}>
          <li onClick={() => navigate('/motionvalues')}>Motion Values</li>
        </NavLists>
      </NavContainer>
    </Wrapper>
  )
}

export default Navigation;

const Wrapper = styled(motion.nav)`
  width: 100%;
  padding: 3rem 0;
  margin: 0 auto;
  position: fixed; // sticky
  top: 0;

  backdrop-filter: blur(8px);

  display: flex;
  justify-content: center;
`

const NavContainer = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavTitle = styled(motion.div)`
  cursor: pointer;
  user-select: none;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
`

const NavLists = styled(motion.ul)`
  display: flex;
  gap: 1rem;

  li {
    cursor: pointer;
    padding: 5px 3px;
    border-bottom: 3px solid #131313;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #b2b2b2;
      border-bottom: 5px solid #b2b2b2;
      transform: translateY(-3px);
    }
  }
`