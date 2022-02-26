import styled from "styled-components";

export const FlexContainer1 = styled.div`
  width: 100%;
  height: 42vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
`;
export const FlexContainer2 = styled.div`
  width: 100%;
  height: calc(58vh - 60px);
  background-color: orange;
  display: flex;
  flex-direction: row;
`;
