import styled from "styled-components"

export const MainContainer = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: row;
`
export const LeftContainer = styled.div`
    width: 57%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #D3D3D3;
    align-items: center;
`
export const RightContainer = styled.div`
    width: 43%;
    height: 100%;
    overflow-y: scroll;
    overflow-y: -moz-scrollbars-none;
    &::-webkit-scrollbar { 
        width: 0 !important;
    }
`