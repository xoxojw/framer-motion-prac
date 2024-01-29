import Navigation from "components/Navigation";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


function App() {
  return (
    <>
      <Wrapper>
        <Navigation />
        <Outlet />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;