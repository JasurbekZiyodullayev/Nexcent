import { styled } from "styled-components";

const WrapPellen = styled.div`
width: 100%;
padding: 32px 0;
`;
const Container = styled.div`
width: 76%;
margin: 0 auto;
display: flex;
align-items: center;
gap: 32px;
flex-direction: column;
justify-content: center;
h2{
    width: 887px;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 76px;
    color: var(--neutral-black);
    text-align: center;
}
button{
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 0;
    gap: 8px;
    border-radius: 4px;
    background: var(--brand-primary);
    padding: 14px 32px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    color: var(--neutral-white);
    line-height: 24px;
    cursor: pointer;
}
`;

export {WrapPellen, Container}