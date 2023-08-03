
import { styled } from "styled-components";

export const NavbarWrap = styled.div`
width: 100%;
height: 100%;
position: relative;
background-color: var(--neutral-silver);
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 84px;
width: 76%;
margin: 0 auto;
@media (max-width: 780px) {
    width: 90%;
}
.burger{
    display: none;
    @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 25px;
    padding: 3px;
    box-sizing: border-box;
    cursor: pointer;
    div{
        background-color: black;
        width: 100%;
        height: 3px;
    }
}
}

`;
export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
&:nth-child(2){
    gap: 50px;
    @media (max-width: 1250px){
        gap:25px;
    }
    @media (max-width: 1100px){
        gap:20px;
    }
    @media (max-width: 1050px){
        gap:14px;
    }
    @media (max-width: 1000px){
        display: none;
    }
}
&:first-child{
    gap: 8px;
    cursor: pointer;
}
&:last-child{
    gap: 14px;
    @media (max-width: 1000px){
        display: none;
    }
}
`;
export const Logo = styled.img`

`

export const H3 = styled.h3`
font-size: 30px;
`;
export const Link = styled.a`
text-decoration:none;
color: var(--text-gray-900);
font-size:16px;
font-style:normal;
line-height:24px;
`;

export const Button = styled.button`
@media (max-width: 1000px){
    display: none;
}
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;
color: var(--brand-primary);
background-color: var(--neutral-silver);
padding: 10px 20px;
border-radius: 6px;
border: 0;
outline: none;
cursor: pointer;
&.active{
    background-color: var(--brand-primary);
    color: var(--default-white);
}
`;

export const ResponsMenu = styled.div`
display: none;
position: absolute;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 10px;
top: 100%;
width: 40%;
left: 35%;
z-index: 99;
transition: all 1s ease;
background-color: var(--default-white);
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
@media (max-width: 1000px) {
    display: flex;
}
`;