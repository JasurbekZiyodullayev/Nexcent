import { styled } from "styled-components";

const WrapUnlock = styled.div`
width: 100%;
`;
const Container = styled.div`
width: 76%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Right = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 661px;
justify-content: space-between;
h2{
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    font-style: normal;
    color: var(--neutral-d-grey);
    margin-bottom: 16px;
    width: 600px;
}
p{
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    font-style: normal;
    color: var(--neutral-grey);
    width: 600px;
}
`;
const Left = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const Button = styled.button`
background-color: var(--brand-primary);
padding: 14px 32px;
border-radius: 4px;
color: var(--default-white);
border: none;
outline: none;
cursor: pointer;
margin-top: 32px;
`;

export {WrapUnlock, Container, Right, Left, Button}