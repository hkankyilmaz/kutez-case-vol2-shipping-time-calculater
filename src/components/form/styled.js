import styled from "styled-components";
import { fontStack } from "../../theme";

export const InputWrapper = styled.div``;
export const StyledForm = styled.form`
  margin-left: 8vw;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SubmitButton = styled.button`
  display: block;
  color: white;
  margin-top: ${(props) => props.theme.gutters.xlargest};
  font-size: 1.25rem;
  background: linear-gradient(60deg, #2414db, #ac6eff);
  padding: 1.2rem 2rem;
  border-radius: 2rem;
  border: none;
  width: 20%;
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 75%;
  }
`;
