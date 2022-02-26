import styled from "styled-components"

export const NavbarStyled = styled.div`
  width: 100%;
  height: 60px;
  max-height: 60px;
  background-color: ${props => props.theme.background};
  > div {
    > img {
      height: 45px;
    }
  }
`

export const Profile = styled.div`
  display: block;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-right: 1rem;

  > div {
    display: inline-block;

    &:first-child {
      border: 1px solid black;
      border-radius: 50%;
      width: fit-content;
      padding: 12px;
      float: left;
    }
    &.profileName {
      margin: 15px;
      margin-top: 2px;
      margin-bottom: 2px;
      font-size: 25px;
      height: 100%;
    }
  }
`