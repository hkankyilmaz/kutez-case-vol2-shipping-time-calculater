import styled from "styled-components";
import { fontStack } from "../theme";

export const Container = styled.div`
  display: flex;
`;
export const LeftSide = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  h2 {
    margin-top: ${(props) => props.theme.gutters.smaller};
    margin-bottom: ${(props) => props.theme.gutters.smaller};
    margin-left: 8vw;

    ${(props) =>
      fontStack(
        props.theme.fontSizes.regular,
        props.theme.colors.text.text,
        props.theme.fontWeights.bold
      )}
  }
  h1 {
    margin-left: 8vw;
    line-height: 8rem;
    ${(props) =>
      fontStack(
        props.theme.fontSizes.biggest,
        props.theme.colors.text.text,
        props.theme.fontWeights.extrabold
      )}
  }
  p {
    margin-left: 8vw;
    ${(props) =>
      fontStack(
        props.theme.fontSizes.smaller,
        props.theme.colors.text.placeHolder,
        props.theme.fontWeights.light
      )}
    span {
      ${(props) =>
        fontStack(
          props.theme.fontSizes.small,
          props.theme.colors.text.text,
          props.theme.fontWeights.semiBold
        )}
      @media (max-width: 650px) {
        span {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 1400px) {
    h2 {
      margin-top: 75px;
    }
  }
  @media (max-width: 1200px) {
    h2 {
      margin-top: 100px;
    }
    p,
    span {
      font-size: 2rem;
    }
  }
  @media (max-width: 1100px) {
    h2 {
      margin-top: 125px;
    }
    p,
    span {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1000px) {
    h2 {
      margin-top: 50px;
    }
  }
  @media (max-width: 650px) {
    width: 85%;
    h1 {
      font-size: 40px;
    }
    h2 {
      margin-top: 125px;
    }
    p span {
      font-size: 1.5rem;
    }
  }
`;
export const RightSide = styled.div`
  width: 30%;
  height: 100vh;
  background-color: red;
  position: relative;
  background: linear-gradient(60deg, #2414db, #ac6eff);
  div {
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 3;
    position: absolute;
    transform: translateX(-50%);
    clip-path: ellipse(25% 50% at 50% 50%);
  }
  @media (max-width: 650px) {
    width: 15%;
  }
`;
