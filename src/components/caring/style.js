import { styled } from "styled-components";

const WrapCaring = styled.div`
width: 100%;
margin-bottom: 174px;
`;
const Container = styled.div`
width: 76%;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`;

const TextWrap = styled.div`
margin-bottom: 16px;
width: 628px;
h2{
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px;
    color: var(--neutral-d-grey);
    text-align: center;
}
p{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--neutral-grey);
    text-align: center;
}
`;
const CardWrap = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`;
const Card = styled.div`
position: relative;
.contentWrap{
    box-shadow: 0px 8px 16px 0px rgba(171, 190, 209, 0.40);
    position: absolute;
    bottom: -75px;
    left: calc(50% - 158.5px);
    background-color: var(--neutral-silver);
    width: 317px;
    height: 176px;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    p{
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
        color: var(--neutral-grey);
        text-align: center;
    }
    button{
        width: 100%;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 0;
        gap: 8px;
        border: 0;
        outline: none;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; 
        color: var(--brand-primary);
        background-color: var(--neutral-silver);
        &:hover{
            background-color: var(--brand-primary);
            color: var(--default-white);
        }
        img{
            width: 25px;
        }
    }
}
`;



export {WrapCaring, Container, Card, CardWrap, TextWrap}