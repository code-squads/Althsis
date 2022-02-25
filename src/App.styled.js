import styled from "styled-components"

export const Navbar = styled.div`
    width: 100%;
    height: 60px;
    background-color: yellow;
`   
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
`
export const RightContainer = styled.div`
    width: 43%;
    height: 100%;
    overflow-y: scroll;
    /* background-color: #e8e8e8; */
`