import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
`;
export const LeftContainer = styled.div`
  width: 57%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #d3d3d3;
`;
export const RightContainer = styled.div`
  width: 43%;
  height: 100%;
  overflow-y: scroll;
  /* background-color: #e8e8e8; */
`;
