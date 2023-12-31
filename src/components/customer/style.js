import { styled } from "styled-components";

const WrapCustomer = styled.div`
width: 100%;
margin: 48px 0;
padding: 32px 0;
background-color: var(--neutral-silver);
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
const Left = styled.div`
width: 326px;
height: 326px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 1170px) {
    width: 300px;
    height: 300px;
}
img{
    width: 100%;
}
`;
const Right = styled.div`
display: flex;
flex-direction: column;
width: 748px;
@media (max-width: 1430px) {
    width: 650px;
}
@media (max-width: 1300px) {
    width: 550px;
}
@media (max-width: 780px) {
    align-items: center;
}
@media (max-width: 610px) {
            width: 100%;
        }
h4{
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    color: var(--brand-primary);
    margin: 16px 0 8px;
    @media (max-width: 920px) {
        font-size: 18px;
        line-height: 24px;
    }
}
p{

    &:first-child{
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        color: var(--neutral-grey);
        @media (max-width: 920px) {
        font-size: 14px;
        line-height: 20px;
        @media (max-width: 780px) {
            text-align: center;
        }
        
    }
    }
    &:nth-child(3){
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        color: var(--neutral-l-grey);
        @media (max-width: 920px) {
        font-size: 14px;
        line-height: 20px;
    }
    }
}

.iconsWrap{
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 485px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .icons{
        @media (max-width: 1430px) {
           gap: 30px;
        }
        @media (max-width: 1300px) {
           gap: 20px;
           img{
            width: 35px;
           }
        }
        @media (max-width: 990px) {
           gap: 15px;
           img{
            width: 30px;
           }
        }
        display: flex;
        gap: 41px;
        img{
            cursor: pointer;
        }
    }
    button{
        @media (max-width: 1430px) {
            font-size: 16px;
            line-height: 20px;
        }
        @media (max-width: 1300px) {
            font-size: 14px;
            line-height: 16px;
         }
        background-color: var(--neutral-silver);
        border: 0;
        outline: none;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
        padding: 8px;
        border-radius: 4px;
        color: var(--brand-primary);
        img{
            width: 24px;
        }
        cursor: pointer;
        &:hover{
            background-color: var(--brand-primary);
            color: var(--neutral-white);
            img{
                width: 24px;
            }
        }
    }
}

`;

export { WrapCustomer, Container, Left, Right }