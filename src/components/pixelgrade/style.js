import { styled } from "styled-components";

const PixelWrap =styled.div`
width: 100%;
`;

const Container = styled.div`
width: 76%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 780px) {
    flex-direction: column;
    width: 90%;
}
`;

const Right = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 661px;
justify-content: space-between;
@media (max-width: 780px) {
    width: 100%;
    align-items: center;
}
h2{
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    font-style: normal;
    color: var(--neutral-d-grey);
    margin-bottom: 16px;
    width: 600px;
    @media (max-width: 1373px) {
        width: 500px;
    }
    @media (max-width: 1241px) {
        width: 400px;
    }
    @media (max-width: 987px) {
        width: 100%;
    }
    @media (max-width: 920px) {
        font-size: 30px;
        line-height: 38px;
    }
    @media (max-width: 780px) {
        text-align: center;
        padding: 0 30px;
    }
}
p{
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    font-style: normal;
    color: var(--neutral-grey);
    width: 600px;
    @media (max-width: 1373px) {
        width: 500px;
    }
    @media (max-width: 1241px) {
        width: 400px;
    }
    @media (max-width: 987px) {
        display: none;
    }
}
`;
const Left = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 50px 0;
@media (max-width: 1110px) {
    img{
        width: 400px;
    }
}
@media (max-width: 1050px) {
    img{
        width: 350px;
    }
}
@media (max-width: 386px) {
    img{
        width: 280px;
    }
}
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

export {PixelWrap, Container, Left, Right, Button}