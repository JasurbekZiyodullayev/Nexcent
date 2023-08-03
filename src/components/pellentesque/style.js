import { styled } from "styled-components";

const WrapPellen = styled.div`
width: 100%;
padding: 32px 0;
background-color: var(--neutral-silver);
`;
const Container = styled.div`
width: 76%;
margin: 0 auto;
display: flex;
align-items: center;
gap: 32px;
flex-direction: column;
justify-content: center;
@media (max-width: 780px) {
    width: 90%;
}
h2{
    width: 887px;
    @media (max-width: 1161px) {
        width: 700px;
    }
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 76px;
    color: var(--neutral-black);
    text-align: center;
    @media (max-width: 920px) {
        font-size: 48px;
        line-height: 60px;
        width: 100%;
    }
    @media (max-width: 410px) {
        font-size: 40px;
        line-height: 50px;
    }
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
    @media (max-width: 920px) {
        font-size: 14px;
        line-height: 20px;
        padding: 10px 24px;
    }
}
`;

export {WrapPellen, Container}