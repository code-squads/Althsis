import styled from "styled-components";

export const FlexContainer1 = styled.div`
  width: 100%;
  /* height: 42vh; */
  min-height: 300px;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
`;
export const FlexContainer2 = styled.div`
  width: 100%;
  /* height: calc(58vh - 60px); */
  height: 100%;
  min-height: 300px;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  border-top: 2px solid ${(props) => props.theme.textColor};
`;
