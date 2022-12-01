import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH..! You're lost</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below t go back to the
            homepage
          </p>
          <Button onClick={() => navigate(-1)}>Home</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 9rem;
  text-align: center;
  h2 {
    font-size: 10rem;
  }
  h3 {
    font-size: 4.2rem;
  }
  p {
    margin: 2rem 0;
  }
`;
export default ErrorPage;
