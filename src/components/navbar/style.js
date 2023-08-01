
import { styled } from "styled-components";

export const NavbarWrap = styled.div`
width: 100%;
height: 100%;
background-color: var(--neutral-silver);
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 84px;
width: 76%;
margin: 0 auto;
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
}
&:first-child{
    gap: 8px;
    cursor: pointer;
}
&:last-child{
    gap: 14px;
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