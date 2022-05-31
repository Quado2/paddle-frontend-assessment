import styled from "styled-components";

import { ListItemProps } from "../../types/ui-elements/list";

export const ListItem = styled.li<ListItemProps>`
background-color: ${({background, theme}) => background ? theme.bg.button_primary: "transparent"};
color: ${({theme}) => theme.text.primary};
padding: 1rem 2rem;
font-size: 14px;
border-radius: 1.5rem;

`

export const List = styled.ul`
 list-style: none;
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 

${ListItem}:nth-child(2){
  transform: translateX(-1.1rem);
 }
 
`

