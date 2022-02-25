import styled from "styled-components"

export const FlexContainer1 = styled.div`
    width: 100%;
    height: 40vh;
    background-color: yellow;
    display: flex;
    flex-direction: row;
`
export const FlexContainer2 = styled.div`
    width: 100%;
    height: calc(60vh - 60px);
    background-color: orange;
    display: flex;
    flex-direction: row;
`
export const CardContainer = styled.div`
    padding-top: 7%;
    display: grid;
    grid-template-columns: repeat(2, 44%);
    grid-auto-rows: 160px;
    grid-gap: 4%;
    justify-content: center;
`
export const Card = styled.div`
    height: 162px;
    /* background-color: #4285F4; */
    background: rgba(66, 133, 244, 0.8);
    box-shadow: 0px 0px 24px rgba(165, 165, 165, 0.35);
    border-radius: 24px;
    padding-left: 19px;
    color: white;
`
export const CardFlex1 = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.5px;
    color: white;
    margin-top: 22px;
`
export const CardFlex2 = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: white;
    margin-top: 23px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`
export const CardFlex3 = styled.div`
    display: flex;
    flex-direction: row;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    margin-top: 24px;
`
export const CardFlex4 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    padding-right: 22px;
`
export const Balance = styled.div`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    margin-top: -3px;
`
