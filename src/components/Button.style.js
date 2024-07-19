import styled from 'styled-components'

export const BluekButton = styled.button`
width: 200px;
background-color: lightblue;
height: 50px;`

export const GreenkButton = styled.button`
width: 200px;
background-color: greenyellow;
height: 50px;`

export const PinkButton = styled.button`
width: 200px;
background-color: lightpink;
height: 50px;`

export const Button = styled.button`
width: 200px;
height: 50px;
  background-color: ${(props) => props.backgroundColor};
  &:hover{
    background-color: coral;
    cursor: pointer;
  }
  &:active{
    background-color: darkred;
    cursor: default;
  }
  color: ${(props) => props.color};
`
