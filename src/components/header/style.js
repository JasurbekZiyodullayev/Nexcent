import { styled } from "styled-components";

const HeaderWrap = styled.div`
width: 100%;
background-color: var(--neutral-silver);
.slide{
    display: flex;
    align-items: center;
}
.carousel-status{
    display: none;
}
.carousel
{
    .control-dots{
        .dot{
            box-shadow: none;
            background-color: var(--brand-primary);
        }
    } 
} 

`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 96px 0;
width: 76%;
margin: 0 auto;
@media (max-width: 780px) {
    width: 90%;
    flex-direction: column;
    gap: 24px;
}
`
const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
&:first-child{
    flex-direction: column;
    width: 657px;
    align-items: flex-start;
    gap: 32px;


    h1{
        font-size: 64px;
        font-style: normal;
        font-weight: 600;
        line-height: 76px;
        text-align: left;
        span{
            color: var(--brand-primary);
        }
    }
    p{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        color: var(--neutral-grey);
    }
    @media (max-width: 920px) {
        width: 100%;
        h1{
            font-size: 48px;
            line-height: 60px;
        }
        p{
            font-size: 14px;
            line-height: 20px;
            width: 350px;
        }
    }
    @media (max-width: 780px) {
    width: 100%;
    align-items: center;
    h1{
        text-align: center;
    }
    p{
        display: none;
    }
}
}
`;
const Button = styled.button`
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color: var(--default-white);
background-color: var(--brand-primary);
padding: 14px 32px;
border-radius: 4px;
border: 0;
outline: none;
cursor: pointer;
@media (max-width: 920px) {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 24px;
}
`;

export { HeaderWrap, Container, Content, Button }